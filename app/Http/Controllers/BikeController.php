<?php

namespace App\Http\Controllers;

use App\Models\Bike;
use App\Traits\CommonTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BikeController extends Controller
{
    use CommonTrait;
    public function index()
    {
        $bikes = Bike::all();
        return $this->sendResponse(['data' => $bikes]);
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
        $bike = new Bike();
        // dd($request);
        if ($request->has('image')) {
            $image = $request->file('image');

            $name = time() . uniqid() . '.' . $image->extension();
            // Store the image in the storage/app/public directory
            $path = $image->storeAs('public', $name);

            // Create a public URL using the storage link
            $imageUrl = Storage::url($path);
            $bike->image = $imageUrl;
        }
        $bike->bike_name = $request->bike_name;
        $bike->brand = $request->brand;
        $bike->bquantity = $request->bquantity;
        $bike->bcost = $request->bcost;
        $bike->color = $request->color;
        $bike->engine_no = $request->engine_no;
        $bike->dob = $request->dob;
        $bike->chas_no = $request->chas_no;
        $bike->m_veh = $request->m_veh;
        $bike->manu = $request->manu;
        $bike->cc = $request->cc;
        $bike->seat_cap = $request->seat_cap;
        $bike->brake = $request->brake;
        $bike->ftyre = $request->ftyre;
        $bike->rtyre = $request->rtyre;
        $bike->weight = $request->weight;
        $bike->save();

        return $this->sendResponse(['data' => $bike]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bike  $bike
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bike = Bike::find($id);

        return $this->sendResponse(['data' => $bike]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bike  $bike
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, )
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bike  $bike
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bike = Bike::find($id);
        if ($request->has('image')) {
            $image = $request->file('image');

            $name = time() . uniqid() . '.' . $image->extension();
            // Store the image in the storage/app/public directory
            $path = $image->storeAs('public', $name);

            // Create a public URL using the storage link
            $imageUrl = Storage::url($path);
            $bike->image = $imageUrl;
        }
        $bike->bike_name = $request->bike_name;
        $bike->brand = $request->brand;
        $bike->bquantity = $request->bquantity;
        $bike->bcost = $request->bcost;
        $bike->engine_no = $request->engine_no;
        $bike->dob = $request->dob;
        $bike->chas_no = $request->chas_no;
        $bike->m_veh = $request->m_veh;
        $bike->manu = $request->manu;
        $bike->cc = $request->cc;
        $bike->seat_cap = $request->seat_cap;
        $bike->brake = $request->brake;
        $bike->tyre = $request->tyre;
        $bike->weight = $request->weight;
        $bike->save();
        return $this->sendResponse(['data' => $bike]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bike  $bike
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bike $bike)
    {
        $bike = Bike::destroy($bike->id);
        return $this->sendResponse(['data' => $bike]);
    }
}
