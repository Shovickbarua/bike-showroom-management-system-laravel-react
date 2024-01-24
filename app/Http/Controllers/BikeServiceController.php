<?php

namespace App\Http\Controllers;

use App\Models\BikeService;
use Illuminate\Http\Request;

class BikeServiceController extends Controller
{

    public function index()
    {
        $bikeservice = BikeService::all();
        return view('service.first_service',compact('bikeservice')); 
    }
    public function second()
    {
        $bikeservice = BikeService::all();
        return view('service.second_service',compact('bikeservice')); 
    }
    public function third()
    {
        $bikeservice = BikeService::all();
        return view('service.third_service',compact('bikeservice'));  
    }
    public function fourth()
    {
        $bikeservice = BikeService::all();
        return view('service.fourth_service',compact('bikeservice'));  
    }
    public function fifth()
    {
        $bikeservice = BikeService::all();
        return view('service.fifth_service',compact('bikeservice'));  
    }
    public function sixth()
    {
        $bikeservice = BikeService::all();
        return view('service.sixth_service',compact('bikeservice')); 
    }
    public function seventh()
    {
        $bikeservice = BikeService::all();
        return view('service.seventh_service',compact('bikeservice'));  
    }
    public function eighth()
    {
        $bikeservice = BikeService::all();
        return view('service.eighth_service',compact('bikeservice')); 
    }



    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show(BikeService $bikeService)
    {
        //
    }


    public function edit(BikeService $bikeService)
    {
        //
    }


    public function update(Request $request, BikeService $bikeService)
    {
        //
    }


    public function destroy(BikeService $bikeService)
    {
        //
    }
}
