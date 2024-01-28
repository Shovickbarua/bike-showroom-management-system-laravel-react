import React from "react";
import { Link } from "react-router-dom";

const Bike = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">All Bike</h3>
                        <Link
                            to="bike/add"
                            className="btn btn-success float-right btn-sm"
                        >
                            Add Bike
                        </Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table
                            id="example"
                            className="table table-bordered table-striped"
                        >
                            <thead>
                                <tr>
                                    <th width="2%">SL</th>
                                    <th>Brand</th>
                                    <th>Model No</th>
                                    <th>Chasis No</th>
                                    <th>Engine No</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                    <th>Image</th>
                                    <th width="">Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* @foreach($bikes as $bike)
								<tr>
									<td>{{$loop->iteration}}</td>
									<td>{{$bike->brand}}</td>
									<td>{{$bike->bike_name}}</td>
									<td>{{$bike->chas_no}}</td>
									<td>{{$bike->engine_no}}</td>
									<td>{{$bike->bquantity}}</td>
									<td>{{$bike->dob}}</td>
									<td><img src="{{asset('/products/'.$bike->image)}}" style="height:150px; width:150px;"/></td>
									<td>
									<div className="d-flex">
										<a href="{{route('bike.edit', $bike->id)}}" className="btn shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>

										<form action="{{route('bike.destroy',$bike->id)}}" method="POST">
										@method('DELETE')    
										@csrf
										<button type="submit" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></button>
										</form>
									</div>
									</td>
									<td><a href="{{route('bike_sale.create', $bike->bike_name)}}" className="btn btn-primary btn-md">Add order</a></td>
								</tr>
							@endforeach */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bike;
