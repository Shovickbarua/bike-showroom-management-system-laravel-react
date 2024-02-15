import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryServices from "../../services/CategoryServices";

const Category = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = async () => {
        const res = await CategoryServices.index();
        if (res.success) {
            setState(res.data.data);
        }
    };

    const handleDeleteCategory = async (id) => {
        const confirmMsg = confirm("Are you sure!");
        if (confirmMsg) {
            const res = await CategoryServices.delete(id);
            // console.log("res", res);
            if (res.success) {
                getCategory();
            }
        }
    };
    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">All Category</h3>
                    <Link
                        to="/categories/add"
                        className="btn btn-success float-right btn-sm"
                    >
                        <i className="fa fa-plus-circle"></i> Add Category
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
                                <th width="10%">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((category, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{category.cat_name}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link
                                                to={
                                                    "/categories/edit/" +
                                                    category.id
                                                }
                                                className="btn shadow btn-xs sharp me-1"
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDeleteCategory(
                                                        category.id
                                                    )
                                                }
                                                className="btn btn-danger shadow btn-xs sharp"
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Category;
