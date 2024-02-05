import React from "react";

const Service = () => {

    // const handleServices = async (data) =>{
    //     const res = 
    // }
    return (
        <>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box" onClick={() => handleServices('first')}>
                        <span class="info-box-icon bg-info elevation-1">
                            <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">First Service</span>
                            <span class="info-box-number">
                                10
                                <small>%</small>
                            </span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3" onClick={() => handleServices('second')}>
                        <span class="info-box-icon bg-danger elevation-1">
                        <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Second Service</span>
                            <span class="info-box-number">41,410</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}

                {/* <!-- fix for small devices only --> */}
                <div class="clearfix hidden-md-up"></div>

                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3" onClick={() => handleServices('third')}>
                        <span class="info-box-icon bg-success elevation-1">
                        <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Third Service</span>
                            <span class="info-box-number">760</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3" onClick={() => handleServices('fourth')}>
                        <span class="info-box-icon bg-warning elevation-1">
                        <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Fourth Service</span>
                            <span class="info-box-number">2,000</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box" onClick={() => handleServices('fifth')}>
                        <span class="info-box-icon bg-info elevation-1">
                        <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Fifth Service</span>
                            <span class="info-box-number">
                                10
                                <small>%</small>
                            </span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3" onClick={() => handleServices('sixth')}>
                        <span class="info-box-icon bg-danger elevation-1">
                        <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Sixth Service</span>
                            <span class="info-box-number">41,410</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}

                {/* <!-- fix for small devices only --> */}
                <div class="clearfix hidden-md-up"></div>

                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3" onClick={() => handleServices('seventh')}>
                        <span class="info-box-icon bg-success elevation-1">
                        <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Seventh Service</span>
                            <span class="info-box-number">760</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="info-box mb-3" onClick={() => handleServices('eighth')}>
                        <span class="info-box-icon bg-warning elevation-1">
                        <i class="fas fa-cog"></i>
                        </span>

                        <div class="info-box-content">
                            <span class="info-box-text">Eighth Service</span>
                            <span class="info-box-number">2,000</span>
                        </div>
                        {/* <!-- /.info-box-content --> */}
                    </div>
                    {/* <!-- /.info-box --> */}
                </div>
                {/* <!-- /.col --> */}
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Service List</h3>
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
        </>
    );
};

export default Service;
