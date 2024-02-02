import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BikeServices from "../../services/BikeServices";

const Bike = () => {
    const [bike, setBike] = useState([]);

    useEffect(() => {
        getBike();
    }, []);
    const getBike = async () => {
        const res = await BikeServices.index();
        console.log("data", res);
        if (res.success) {
            setBike(res.data.data);
        }
    };

    const deleteBike = async (id) => {
        const res = await BikeServices.delete(id);
        if (res.success) {
            getBike();
        }
    };
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">All Bike</h3>
                        <Link
                            to="bike/add"
                            className="btn btn-success float-right btn-sm"
                        >
                            Add Bike
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
                                    <th width="2%">SL</th>
                                    <th>Brand</th>
                                    <th>Model No</th>
                                    <th>Chasis No</th>
                                    <th>Engine No</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                    <th>Image</th>
                                    <th width="">Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bike.map((bike, index) => {
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{bike.brand}</td>
                                        <td>{bike.bike_name}</td>
                                        <td>{bike.chas_no}</td>
                                        <td>{bike.engine_no}</td>
                                        <td>{bike.bquantity}</td>
                                        <td>{bike.dob}</td>
                                        <td>
                                            <img src={bike.image} />
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <Link
                                                    to={"/bike/edit/" + bike.id}
                                                    className="btn shadow btn-xs sharp me-1"
                                                >
                                                    <i className="fas fa-pencil-alt"></i>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteBike(bike.id)
                                                    }
                                                    type="submit"
                                                    className="btn btn-danger shadow btn-xs sharp"
                                                >
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <a className="btn btn-primary btn-md">
                                                Add order
                                            </a>
                                        </td>
                                    </tr>;
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bike;
