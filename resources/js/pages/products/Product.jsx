import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductServices from "../../services/ProductServices";

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);
    const getProduct = async () => {
        const res = await ProductServices.index();
        console.log("data", res);
        if (res.success) {
            setProduct(res.data.data);
        }
    };

    const deleteProduct = async (id) => {
        const res = await ProductServices.delete(id);
        console.log("data", res);
        if (res.success) {
            getProduct();
        }
    };
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">All Product</h3>
                        <Link
                            to="/product/add"
                            className="btn btn-success float-right btn-sm"
                        >
                            <i className="fa fa-plus-circle"></i>Add Product
                        </Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table
                            id="example"
                            className="table table-bordered table-striped"
                        >
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
                                {product.map((product, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product.product_name}</td>
                                        <td>{product.category.cat_name}</td>
                                        <td>{product.SKU}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.dob}</td>
                                        <td>
                                            <img src={product.image} />
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <Link
                                                    to={
                                                        "/product/edit/" +
                                                        product.id
                                                    }
                                                    className="btn shadow btn-xs sharp me-1"
                                                >
                                                    <i className="fas fa-pencil-alt"></i>
                                                </Link>
                                                <a
                                                    onClick={() =>
                                                        deleteProduct(
                                                            product.id
                                                        )
                                                    }
                                                    className="btn btn-danger shadow btn-xs sharp"
                                                >
                                                    <i className="fa fa-trash"></i>
                                                </a>
                                            </div>
                                        </td>

                                        <td>
                                            <a
                                                href="{{route('add_sale', $product->product_name)}}"
                                                className="btn btn-primary btn-md"
                                            >
                                                Add Sale
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
