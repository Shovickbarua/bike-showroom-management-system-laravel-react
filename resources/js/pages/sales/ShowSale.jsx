import React from "react";

const ShowSale = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        {/* <!-- /.card-header --> */}
                        <div class="card-body">
                            <table
                                id="example1"
                                class="table table-bordered table-striped"
                            >
                                <thead>
                                    <tr>
                                        <th width="">Invoice ID</th>
                                        <th>Customer Name</th>
                                        <th>Contact</th>
                                        <th>Date</th>
                                        {/* {{-- <th width="">Action</th> --}} */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* <td>{{$sales->invoiceId}}</td>
									<td>{{$sales->cus_name}}</td>
									<td>{{$sales->contact}}</td>
									<td>{{$sales->dob}}</td> */}
                                        {/* {{--<td>
									<div class="d-flex">
										<a href="{{route('sale.edit', $sales->id)}}" class="btn shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>

										<form action="{{route('sale.destroy',$sales->id)}}" method="POST">
										@method('DELETE')    
										@csrf
										<button type="submit" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
										</form>
									</div>
									</td>--}} */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <a
                                href="{{route('indexsale')}}"
                                class="btn btn-success float-right btn-sm"
                            >
                                Add More
                            </a>
                            <a
                                href="{{route('pos_invoice',$sales->invoiceId)}}"
                                class="btn btn-success float-right btn-sm mr-2"
                            >
                                POS Invoice
                            </a>
                            <a
                                href="{{route('invoice', $sales->invoiceId)}}"
                                class="btn btn-success float-right btn-sm mr-2"
                            >
                                Invoice
                            </a>
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
                                        <th>Product Name</th>
                                        <th>SKU</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        {/* {{---  <th width="">Action</th> ---}}  */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* @foreach($sale as $sl)
								<tr>
									<td>{{$loop->iteration}}</td>
									<td>{{$sl->product_name}}</td>
									<td>{{$sl->SKU}}</td>
									<td>{{$sl->pro_quantity}}</td>
									<td>{{$sl->total}}</td>
							{{---	<td>
									<div class="d-flex">
										<a href="{{route('invoice', $sl->invoiceId)}}" class="btn btn-danger btn-xs"><i class="fa fa-file-pdf"></i></a>
										<a href="{{route('sale.edit', $sl->id)}}" class="btn shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></a>

										<form action="{{route('sale.destroy',$sl->id)}}" method="POST">
										@method('DELETE')    
										@csrf
										<button type="submit" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
										</form>
									</div>
									</td> ---}}
								</tr>
							@endforeach */}
                                </tbody>
                            </table>
                            <div class="form-row pb-3 mt-2">
                                <div class="col-md-6">
                                    <span class="pl-5">
                                        <strong>Total:</strong>
                                    </span>
                                </div>
                                {/* <div class="col-md-6"><span class="pl-5 "><strong>{{$sale->sum('total')}}</strong></span></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowSale;
