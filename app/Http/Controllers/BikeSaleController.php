<?php

namespace App\Http\Controllers;

use App\Models\BikeSale;
use App\Models\Bike;
use App\Models\methods;
use App\Models\BikeService;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

class BikeSaleController extends Controller
{
    public function index()
    {
        $bikes= Bikesale::all();
        return view('bikes.bike_sale_list',compact('bikes'));
    }


    public function create(Request $request)
    {
        $bike = Bike::where('bikes.bike_name','LIKE','%'.$request->bike_name.'%')
                    ->first();
        $methods= methods::all();
        return view('bikes.add_order',compact('methods','bike'));
    }

    //Old bike Sale Add
    public function add_old_bike_sale()
    {
        $methods= methods::all();
        return view('bikes.add_order_old',compact('methods'));
    }


    public function store(Request $request)
    {
        //dd($request->invoiceId);
        if(!$request->invoiceId )
        {

        $invoice = Bikesale::orderBy('id','DESC')->first();
        if ($invoice == null) {
    		$firstReg = 0;
    		$invoiceID = $firstReg+1;
    		if ($invoiceID < 10) {
    			$id_no = '00'.$invoiceID;
    		}elseif ($invoiceID < 100) {
    			$id_no = '0'.$invoiceID;
    		}
    	}else{
        $invoice = Bikesale::orderBy('id','DESC')->first()->id;
     	$invoiceID = $invoice+1;
     	if ($invoiceID < 10) {
    			$id_no = '00'.$invoiceID;
    		}elseif ($invoiceID < 100) {
    			$id_no = '0'.$invoiceID;
    		}

    	}

        $date =  new Carbon($request->dob);
        
        $invoiceId ='HF'.$date->format('Y').$date->format('m').$id_no;
        //dd($invoiceId);
        $product = Bike::where('bikes.id','LIKE','%'.$request->bike_id.'%')
                    ->first();
        $bike = new Bikesale();
        $bike->invoiceId = $invoiceId;
        $bike->client_name = $request->client_name;
        $bike->fName = $request->fName;
        $bike->nid = $request->nid;
        $bike->method_id = $request->method_id;
        $bike->dob =$request->dob;
        $bike->contact = $request->contact;
        $bike->address = $request->address;
        $bike->brand = $product->brand;
        $bike->bike_name = $product->bike_name;
        $bike->bsquantity = $request->bsquantity;
        $bike->engine_no = $product->engine_no;
        $bike->chas_no = $product->chas_no;
        $bike->m_veh =$product->m_veh;
        $bike->manu =$product->manu;
        $bike->cc =$product->cc;
        $bike->seat_cap =$product->seat_cap;
        $bike->brake =$product->brake;
        $bike->tyre =$product->tyre;
        $bike->color =$request->color;
        $bike->weight =$product->weight;
        $bike->sale_price = $request->sale_price;
        $bike->registration = $request->registration;
        $bike->bank_draft = $request->bank_draft;
        $bike->brta = $request->brta;
        $bike->profit = ($request->sale_price * $request->bsquantity) - ($product->bcost * $request->bsquantity) + ($request->registration-($request->bank_draft + $request->brta));
        $bike->total = ($request->sale_price * $request->bsquantity) + $request->registration + $request->bank_draft + $request->brta ;
        $bike->save();

        $product->update([
            'bquantity' => $product->bquantity - $request->bsquantity, // quantity of product from order
        ]);

        $service = new BikeService();
        $service->invoiceId         = $invoiceId;
        $service->client_name       = $request->client_name;
        $service->contact           = $request->contact;
        $service->address           = $request->address;
        $service->bike_name         = $request->bike_name;
        $service->bsquantity        = $request->bsquantity;
        $service->first_service     =(new Carbon($request->dob))->addDays(20);
        $service->second_service    =(new Carbon($request->dob))->addDays(35);
        $service->third_service     =(new Carbon($request->dob))->addDays(140);
        $service->fourth_service    =(new Carbon($request->dob))->addDays(200);
        $service->fifth_service     =(new Carbon($request->dob))->addDays(260);
        $service->sixth_service     =(new Carbon($request->dob))->addDays(320);
        $service->seventh_service   =(new Carbon($request->dob))->addDays(380);
        $service->eighth_service    =(new Carbon($request->dob))->addDays(440);
        $service->save();
        
 
    }
    else{

        $bike = new Bikesale();
        $bike->invoiceId = $request->invoiceId;
        $bike->client_name = $request->client_name;
        $bike->fName = $request->fName;
        $bike->nid = $request->nid;
        $bike->method_id = $request->method_id;
        $bike->dob =$request->dob;
        $bike->contact = $request->contact;
        $bike->address = $request->address;
        $bike->brand = $request->brand;
        $bike->bike_name = $request->bike_name;
        $bike->bsquantity = $request->bsquantity;
        $bike->engine_no = $request->engine_no;
        $bike->chas_no = $request->chas_no;
        $bike->m_veh =$request->m_veh;
        $bike->manu =$request->manu;
        $bike->cc =$request->cc;
        $bike->seat_cap =$request->seat_cap;
        $bike->brake =$request->brake;
        $bike->tyre =$request->tyre;
        $bike->color =$request->color;
        $bike->weight =$request->weight;
        $bike->sale_price = $request->sale_price;
        $bike->registration = $request->registration;
        $bike->bank_draft = $request->bank_draft;
        $bike->brta = $request->brta;
        $bike->profit = ($request->sale_price * $request->bsquantity) - ($request->bcost * $request->bsquantity) + ($request->registration-($request->bank_draft + $request->brta));
        $bike->total = ($request->sale_price * $request->bsquantity) + $request->registration + $request->bank_draft + $request->brta ;
        $bike->save();

        //Bike Service

        $service = new BikeService();
        $service->invoiceId         = $request->invoiceId;
        $service->client_name       = $request->client_name;
        $service->contact           = $request->contact;
        $service->address           = $request->address;
        $service->bike_name         = $request->bike_name;
        $service->bsquantity        = $request->bsquantity;
        $service->first_service     =(new Carbon($request->dob))->addDays(20);
        $service->second_service    =(new Carbon($request->dob))->addDays(35);
        $service->third_service     =(new Carbon($request->dob))->addDays(140);
        $service->fourth_service    =(new Carbon($request->dob))->addDays(200);
        $service->fifth_service     =(new Carbon($request->dob))->addDays(260);
        $service->sixth_service     =(new Carbon($request->dob))->addDays(320);
        $service->seventh_service   =(new Carbon($request->dob))->addDays(380);
        $service->eighth_service    =(new Carbon($request->dob))->addDays(440);
        $service->save();
         
    }
    return redirect(route('bike_sale.index'));
    }



    public function bikeinvoice(Request $request)
    {
        $bike = Bikesale::where('bikesales.invoiceId','LIKE','%'.$request->invoiceId.'%')
                    ->first();
        $path = base_path('Capture.png');
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $pic ='data:image/'.$type . ';base64,' .base64_encode($data); 
        $pdf = Pdf::setOptions([
            'isHtml5ParserEnabled' => true,
            'isRemoteEnabled' => true
        ])->loadView('bikes.invoice_bike', compact('bike','pic'));
       // $pdf = Pdf::loadView('bikes.invoice_bike', compact('bike'));
        return $pdf->download('bikeinvoice.pdf');
    } 
    public function show(Bikesale $bikesale)
    {
      
    }

 
    public function edit(Bikesale $bikesale)
    {
        //
    }

 
    public function update(Request $request, Bikesale $bikesale)
    {
        //
    }


    public function destroy($bike)
    {
        Bikesale::destroy($bike->InvoiceId);
        return redirect(route('product.index'));
    }
}
