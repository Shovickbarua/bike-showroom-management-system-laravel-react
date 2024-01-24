import React from 'react'

const CategoryForm = () => {
  return (
    <form id="myForm" method="POST" action="">

              <div className="form-row">
                  <div className="form-group col-md-4">
                    <label for="name">Category<font style="color:red">*</font></label>
                    <input type="text" className="form-control" id="name" placeholder="Category" name="cat_name" value=""/>
                  </div>
                 
                <div className="form-group col-md-12">
                  <button type="submit" className="btn btn-primary btn-sm" name="cat_btn">Save</button>
                </div>
              </div>
</form>
  )
}

export default CategoryForm