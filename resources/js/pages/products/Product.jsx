import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="row">
			<div className="col-lg-12">
				<div className="card">
				  <div className="card-header">
					<h3 className="card-title">All Product</h3>
					<Link to="/product/add" className="btn btn-success float-right btn-sm"><i className="fa fa-plus-circle"></i>Add Product</Link>
				  </div>
					{/* <!-- /.card-header --> */}
					<div className="card-body">
          <table id="example" className="table table-bordered table-striped">
						  <thead>
						  <tr>
                <th width="7%">Serial</th>
                <th>Name</th>
                <th>Category</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Image</th>
                <th width="">Action</th>
                <th width=""></th>
						  </tr>
						  </thead>
						  <tbody>
							{/* @foreach($products as $product)
								<tr>
									<td>{{$loop->iteration}}</td>
									<td>{{$product->product_name}}</td>
									<td>{{$product->cat_name}}</td>
									<td>{{$product->SKU}}</td>
									<td>{{$product->quantity}}</td>
									<td>{{$product->dob}}</td>
									<td><img src="{{asset('/products/'.$product->image)}}" style="height:150px; width:150px;"/></td>
									@if(session('name')  == 'superadmin')
									<td>
									<div className="d-flex">
										<a href="{{route('product.edit', $product->id)}}" className="btn shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>

										<form action="{{route('product.destroy',$product->id)}}" method="POST">
										@method('DELETE')    
										@csrf
										<button type="submit" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></button>
										</form>
									</div>
									</td>
									@endif
									<td><a href="{{route('add_sale', $product->product_name)}}" className="btn btn-primary btn-md">Add Sale</a></td>
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

export default Product