import React from 'react'

const ProductForm = () => {
  return (
    <form id="myForm" method="POST"  action="" enctype="multipart/form-data">

              <div className="form-row">
                  <div className="form-group col-md-4">
                    <label for="name">Product<font style="color:red">*</font></label>
                    <input type="text" className="form-control" id="" placeholder="Name" name="product_name" value=""/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="group_id">Select Category</label>
                    <select className="form-control" id="cat_id" name="cat_id">
                      <option value="">--Select Category --</option>
                      {/* @foreach($categories as $category)
                        <option value="{{$category->id}}">{{$category->cat_name}}</option>
                      @endforeach */}
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">SKU<font style="color:red">*</font></label>
                    <input type="text" className="form-control" id="" placeholder="SKU" name="SKU" value=""/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="dob">Date<font style="color:red">*</font></label>
                    <input type="date" className="form-control singledatepicker" id="dob" name="dob" autocomplete="on"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">Quantity<font style="color:red">*</font></label>
                    <input type="number" className="form-control" id="" placeholder="" name="quantity" value=""/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="name">Cost Price<font style="color:red">*</font></label>
                    <input type="text" className="form-control" id="" placeholder="" name="cost" value=""/>
                  </div>
                  <div className="form-group col-md-4">
                      <label for="image">Image Upload</label>
                      <input type="file" className="form-control" id="image" name="image"/>
                  </div>  
                <div className="form-group col-md-12">
                  <button type="submit" className="btn btn-primary btn-sm" name="pro_btn">Save</button>               
                </div>
              </div>
      </form>
  )
}

export default ProductForm