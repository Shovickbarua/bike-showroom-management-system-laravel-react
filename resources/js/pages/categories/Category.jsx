import React from 'react'

const Category = () => {
  return (
    <div className="col-lg-12">
				<div className="card">
				  <div className="card-header">
					<h3 className="card-title">All Category</h3>
					<Link to="categories/add" className="btn btn-success float-right btn-sm"><i className="fa fa-plus-circle"></i> Add Category </Link>
				  </div>
					{/* <!-- /.card-header --> */}
					<div className="card-body">
						<table id="example" className="table table-bordered table-striped">
						  <thead>
							<tr>
								<th width="7%">Serial</th>
								<th>Name</th>
								<th width="10%">Action</th>
							</tr>
						  </thead>
						  <tbody>
						  {/* @foreach($categories as $category)
							<tr>
								<td>{{$loop->iteration}}</td>
								<td>{{$category->cat_name}}</td>
								
									<td>
									<div className="d-flex">
										<a href="{{route('category.edit', $category->id)}}" className="btn shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>

										<form action="{{route('category.destroy',$category->id)}}" method="POST">
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
  )
}

export default Category