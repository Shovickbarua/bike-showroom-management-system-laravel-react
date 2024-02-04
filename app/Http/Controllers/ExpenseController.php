<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Traits\CommonTrait;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    use CommonTrait;
    public function index()
    {
        $expenses = Expense::all();
        $ex =Expense::sum('amount');

        return $this->sendResponse(['data' => $expenses,$ex]);
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
                'ex_name'   => 'required',
                'amount'    => 'required'
            ],
        );

        $expense = new Expense();
        $expense->ex_name = $request->ex_name;
        $expense->amount = $request->amount;
        $expense->save();

        return $this->sendResponse(['data' => $expense]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show(Expense $expense, $id)
    {
        $expense = Expense::find($id);
        return $this->sendResponse(['data' => $expense]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function edit(Expense $expense)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Expense $expense)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expense $expense,$id)
    {
        $expense = Expense::destroy($id);
        return $this->sendResponse(['data' => $expense]);
    }
}
