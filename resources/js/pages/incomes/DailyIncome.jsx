import React from "react";

const DailyIncome = () => {
    return (
        <div class="row">
			<div class="col-lg-12">
				<div class="card">
                <form id="myForm" method="GET">
                    <div class="form-row mt-2 ml-2">
                        <div class="form-group col-md-12 ">
                            <button type="submit" class="btn btn-primary btn-md" name="pro_btn">Close Sale Today</button>           
                        </div>
                    </div>
                </form>
				  <div class="card-header">
					<h3 class="card-title">Report</h3>
				  </div>
					{/* <!-- /.card-header --> */}
					<div class="card-body">
                        <table id="example1" class="table table-bordered table-striped">
						  <thead>
                            <tr>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
						  </thead>
						  <tbody>
							{/* @foreach($pres as $pre)
								<tr>
									<td>{{$pre->dob}}</td>
									<td>{{$pre->amount}}</td>
								</tr>
							@endforeach */}
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

    )
};

export default DailyIncome;
