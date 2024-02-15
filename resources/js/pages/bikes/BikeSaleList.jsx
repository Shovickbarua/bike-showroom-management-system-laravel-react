import React, { useEffect, useState } from "react";
import BikeSaleServices from "../../services/BikeSaleServices";

const BikeSaleList = () => {
    const [bike, setBike] = useState([]);

    useEffect(() => {
        getBike();
    }, []);

    const getBike = async () => {
        const res = await BikeSaleServices.index();
        console.log("data", res.data.data);
        if (res.success) {
            setBike(res.data.data);
        }
    };
    console.log("res", bike);
    const deleteBike = async (id) => {
        const res = await BikeSaleServices.delete(id);
        if (res.success) {
            getBike();
        }
    };
    
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Bike Sale List</h3>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div class="card-body">
                        <table
                            id="example1"
                            class="table table-bordered table-striped"
                        >
                            <thead>
                                <tr>
                                    <th width="7%">Serial</th>
                                    <th>Invoice ID</th>
                                    <th>Client Name</th>
                                    <th>Model No</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                    <th>Profit</th>
                                    <th>Total</th>
                                    <th width="">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bike.map((bike, index) =>(
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{bike.invoiceId}</td>
									<td>{bike.client_name}</td>
									<td>{bike.bike_name}</td>
									<td>{bike.bsquantity}</td>
									<td>{bike.dob}</td>
									<td>{bike.profit}</td>
									<td>{bike.total}</td>
									<td>
									<div class="d-flex">
										{/* <a href="{{route('saledetails', $bike->invoiceId)}}" class="btn btn-light btn-xs"><i class="fas fa-eye"></i></a>
										<a href="{{route('bikeinvoice', $bike->invoiceId)}}" class="btn btn-light btn-xs"><i class="fa fa-file-pdf"></i></a> */}
										<button type="submit"  onClick={()=>deleteBike(bike.id)} class="btn btn-light btn-xs sharp"><i class="fa fa-trash"></i></button>
									</div>
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

export default BikeSaleList;
