import React from "react";

const BikeStockList = () => {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Bike Sale List</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                        <table
                            id="example1"
                            class="table table-bordered table-striped"
                        >
                            <thead>
                                <tr>
                                    <th width="7%">Serial</th>
                                    <th>Brand</th>
                                    <th>Model No</th>
                                    <th>Chasis No</th>
                                    <th>Engine No</th>
                                    <th>Quantity</th>
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

export default BikeStockList;
