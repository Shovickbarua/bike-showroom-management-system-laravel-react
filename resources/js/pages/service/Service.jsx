import React from "react";

const Service = () => {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Eighth Service List</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                        <table
                            id="example1"
                            class="table table-bordered table-striped"
                        >
                            <thead>
                                <tr>
                                    <th width="">Invoice ID</th>
                                    <th>Model No</th>
                                    <th>Customer Name</th>
                                    <th>Quantity</th>
                                    <th>Contact</th>
                                    <th>Duration</th>
                                    <th>Service Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* @foreach($bikeservice as $service)
								<tr>
									<td>{{$service->invoiceId}}</td>
									<td>{{$service->bike_name}}</td>
									<td>{{$service->client_name}}</td>
									<td>{{$service->bsquantity}}</td>
									<td>{{$service->contact}}</td>
									<td>{{$service->eighth_service}}</td>
									<td>
										<form action="{{route('services.update',$service->id)}}" method="POST">
											@method('PUT')    
											@csrf
											<select class="form-control" id="cat_id" name="service_type">
												<option value="">eighth</option>
												<option value="terminate">Terminate</option>
											</select>
									</td>
									<td>
											<button type="submit" class="btn btn-primary">Update</button>
										</form>
									</td>
								@endforeach */}
                                {/* </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
