<?php

namespace App\Http\Controllers;

use App\Models\Income;
use App\Models\daily_income;
use App\Models\Sale;
use App\Models\Bikesale;
use App\Models\Expense;
use App\Traits\CommonTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

class IncomeController extends Controller
{
    use CommonTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $incomes = Income::all();
        $in = Income::sum('amount');

        return $this->sendResponse(['data' => $incomes,$in]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'in_name' => 'required',
                'amount' => 'required',
                'dob' => 'required'
            ],
        );

        $income = new Income();
        $income->in_name = $request->in_name;
        $income->amount = $request->amount;
        $income->dob = $request->dob;
        $income->save();

        return $this->sendResponse(['data' => $income]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function in_reports(Request $request)
    {
        if (Session::has("fdob")) {
            Session::forget('fdob', 'ldob');
        } else {

        }
        $incomes = Income::whereBetween('dob', [$request->fdob, $request->ldob])
            ->get();
        $in = Income::whereBetween('dob', [$request->fdob, $request->ldob])
            ->sum('amount');
        Session::put([
            'fdob' => $request->fdob,
            'ldob' => $request->ldob
        ]);

        return view('incomes.income_bydate', compact('incomes', 'in'));
    }

    /*Search Sale by date pdf */
    public function in_pdf(Request $request)
    {
        $incomes = Income::whereBetween('dob', [session('fdob'), session('ldob')])
            ->get();
        $in = Income::whereBetween('dob', [session('fdob'), session('ldob')])
            ->sum('amount');
        $path = base_path('Capture.png');
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $pic = 'data:image/' . $type . ';base64,' . base64_encode($data);
        $pdf = Pdf::setOptions([
            'isHtml5ParserEnabled' => true,
            'isRemoteEnabled' => true
        ])->loadView('incomes.income_report', compact('incomes', 'in', 'pic'));
        return $pdf->download('income_report.pdf');
    }

    // Daily Income
    public function insert_daily(Request $request)
    {
        $pres = daily_income::orderBy('id', 'DESC')->get();

        return view('incomes.daily_income', compact('pres'));

    }
    public function daily(Request $request)
    {
        $income = Income::where('dob', Carbon::now())
            // $income = Income::where('dob',date('Y-m-d'));
            ->sum('amount');
        $expenses = Expense::where('dob', Carbon::now())
            ->sum('amount');
        $sales = Sale::where('dob', Carbon::now())
            ->sum('profit');
        $bikesales = Bikesale::where('dob', Carbon::now())
            ->sum('profit');
        $pre = daily_income::where('dob', Carbon::yesterday())
            ->sum('amount');

        $amount = ($pre + $income + $expenses + $sales + $bikesales) - $expenses;

        $daily = new daily_income();
        $daily->dob = date('Y-m-d');
        $daily->amount = $amount;
        $daily->save();

        $pres = daily_income::orderBy('id', 'DESC')->first();

        return redirect(route('insert_daily'));
    }

    public function show(Income $income, $id)
    {
        $income = Income::find($id);
        return $this->sendResponse(['data' => $income]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Income $income, $id)
    {
        $income = Income::find($id);
        $income->in_name = $request->in_name;
        $income->amount = $request->amount;
        $income->dob = $request->dob;
        $income->save();

        return $this->sendResponse(['data' => $income]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function destroy(Income $income, $id)
    {
        $incomes = Income::destroy($id);
        return $this->sendResponse(['data' => $incomes]);
    }
}
