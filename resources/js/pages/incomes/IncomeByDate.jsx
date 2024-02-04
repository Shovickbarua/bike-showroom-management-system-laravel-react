import React from "react";

const IncomeByDate = () => {
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
                                <a
                                    href="{{route('in_report')}}"
                                    class="btn btn-success btn-md mr-2"
                                >
                                    Report
                                </a>
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
                                {/* @foreach($incomes as $income)
								<tr>
									<td>{{$loop->iteration}}</td>
									<td>{{$income->in_name}}</td>
									<td>{{$income->dob}}</td>
									<td>{{$income->amount}}</td>
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
                                    <div class="col-md-6">
                                        <span class="pl-5 ">
                                            {/* <strong>{{ $in }}</strong> */}
                                        </span>
                                    </div>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeByDate;
