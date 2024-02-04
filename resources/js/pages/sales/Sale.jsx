import React from "react";

const Sale = () => {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">All Sales</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                        <table
                            id="example"
                            class="table table-bordered table-striped"
                        >
                            <thead>
                                <tr>
                                    <th width="7%">Serial</th>
                                    <th width="">Invoice ID</th>
                                    <th>Product Name</th>
                                    <th>Customer Name</th>
                                    <th>Quantity</th>
                                    <th>Contact</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th width="">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* @foreach($sales as $sale)
								<tr>
									<td>{{$loop->iteration}}</td>
									<td>{{$sale->invoiceId}}</td>
									<td>{{$sale->product_name}}</td>
									<td>{{$sale->cus_name}}</td>
									<td>{{$sale->pro_quantity}}</td>
									<td>{{$sale->contact}}</td>
									<td>{{$sale->dob}}</td>
									<td>{{$sale->total}}</td>
									<td>
									<div class="d-flex">
										<a href="{{route('pos_invoice', $sale->invoiceId)}}" class="btn btn-light btn-xs"><i class="fas fa-print"></i></a>
										<a href="{{route('invoice', $sale->invoiceId)}}" class="btn btn-light btn-xs"><i class="fa fa-file-pdf"></i></a>
										<form action="{{route('sale.destroy',$sale->id)}}" method="POST">
										@method('DELETE')    
										@csrf
										<button type="submit" class="btn btn-light btn-xs sharp"><i class="fa fa-trash"></i></button>
										</form>
									</div>
									</td>
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

export default Sale;
