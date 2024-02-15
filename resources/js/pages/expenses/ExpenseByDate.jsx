import React from "react";

const ExpenseByDate = () => {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <form id="myForm" method="GET">
                        <div class="form-row mt-2 ml-2">
                            <div class="form-group col-md-4 mt-2 ">
                                <label for="dob">From</label>
                                <input
                                    type="date"
                                    class="form-control singledatepicker"
                                    id="min"
                                    name="fdob"
                                />
                            </div>
                            <div class="form-group col-md-4 mt-2 ">
                                <label for="dob">To</label>
                                <input
                                    type="date"
                                    class="form-control singledatepicker"
                                    id="max"
                                    name="ldob"
                                />
                            </div>
                            <div class="form-group col-md-12 ">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-md"
                                    name="pro_btn"
                                >
                                    Search
                                </button>
                                <Link to="" class="btn btn-success btn-md mr-2">
                                    Report
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div class="card-header">
                        <h3 class="card-title">Report</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                        <table id="" class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th width="7%">Serial</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* @foreach($expenses as $expense)
								<tr>
									<td>{{$loop->iteration}}</td>
									<td>{{$expense->ex_name}}</td>
									<td>{{$expense->dob}}</td>
									<td>{{$expense->amount}}</td>
								</tr>
							@endforeach */}
                            </tbody>
                            <tr>
                                <th colspan="3">
                                    <div class="col-md-6">
                                        <span class="pl-5">
                                            <strong>Total </strong>
                                        </span>
                                    </div>
                                </th>
                                <th>
                                    {/* <div class="col-md-6"><span class="pl-5 "><strong>{{$ex}}</strong></span></div> */}
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseByDate;
