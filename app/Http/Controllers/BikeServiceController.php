<?php

namespace App\Http\Controllers;

use App\Models\BikeService;
use Illuminate\Http\Request;

class BikeServiceController extends Controller
{

    public function serviceData($data)
    {
        if ($data == 'first') {
            $bikeservice = BikeService::pluck('');
        }
        $bikeservice = BikeService::all();
        return $this->sendResponse(['data' => $bikeservice]);
    }
    public function index()
    {
        $bikeservice = BikeService::where('service_type', 'first')->get();
        return view('service.first_service', compact('bikeservice'));
    }
    public function second()
    {
        $bikeservice = BikeService::where('service_type', 'second')->get();
        return view('service.second_service', compact('bikeservice'));
    }
    public function third()
    {
        $bikeservice = BikeService::where('service_type', 'third')->get();
        return view('service.third_service', compact('bikeservice'));
    }
    public function fourth()
    {
        $bikeservice = BikeService::where('service_type', 'fourth')->get();
        return view('service.fourth_service', compact('bikeservice'));
    }
    public function fifth()
    {
        $bikeservice = BikeService::where('service_type', 'fifth')->get();
        return view('service.fifth_service', compact('bikeservice'));
    }
    public function sixth()
    {
        $bikeservice = BikeService::where('service_type', 'sixth')->get();
        return view('service.sixth_service', compact('bikeservice'));
    }
    public function seventh()
    {
        $bikeservice = BikeService::where('service_type', 'seventh')->get();
        return view('service.seventh_service', compact('bikeservice'));
    }
    public function eighth()
    {
        $bikeservice = BikeService::where('service_type', 'eighth')->get();
        return view('service.eighth_service', compact('bikeservice'));
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
