import React from 'react'

const Income = () => {
  return (
    <div className="row">
			<div className="col-lg-12">
				<div className="card">
				  <div className="card-header">
					<h3 className="card-title">All Income</h3>
					<Link to="income/add" className="btn btn-success float-right btn-sm">Add Income</Link>
				  </div>
					{/* <!-- /.card-header --> */}
					<div className="card-body">
          <table id="example1" className="table table-bordered table-striped">
						  <thead>
						  <tr>
                <th width="7%">Serial</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th width="17%">Action</th>
						  </tr>
						  </thead>
						  <tbody>
							{/* @foreach($incomes as $income)
								<tr>
									<td>{{$loop->iteration}}</td>
									<td>{{$income->in_name}}</td>
									<td>{{$income->amount}}</td>
									<td>{{$income->dob}}</td>
									<td>
                  				<div className="d-flex">
									<a href="{{route('income.edit', $income->id)}}" className="btn shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
									<form action="{{route('income.destroy',$income->id)}}" method="POST">
										@method('DELETE')    
										@csrf
										<button type="submit" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></button>
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
  )
}

export default Income