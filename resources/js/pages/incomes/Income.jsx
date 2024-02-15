import React, { useState } from "react";
import IncomeServices from "../../services/IncomeServices";

const Income = () => {
	const [state, setState] = useState([]);

    useEffect(() => {
        getIncome();
    }, []);

    const getIncome = async () => {
        const res = await IncomeServices.index();
        if (res.success) {
            setState(res.data.data);
        }
    };

    const handleDeleteIncome = async (id) => {
        const confirmMsg = confirm("Are you sure!");
        if (confirmMsg) {
            const res = await IncomeServices.delete(id);
            // console.log("res", res);
            if (res.success) {
                getIncome();
            }
        }
    };
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">All Income</h3>
                        <Link
                            to="income/add"
                            className="btn btn-success float-right btn-sm"
                        >
                            Add Income
                        </Link>
                    </div>
                    {/* <!-- /.card-header --> */}
                    <div className="card-body">
                        <table
                            id="example1"
                            className="table table-bordered table-striped"
                        >
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
                                {state.map((income, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{income.ex_name}</td>
                                        <td>{income.amount}</td>
                                        <td>{income.dob}</td>
                                        <td>
                                            <div className="d-flex">
                                                <Link
                                                    to={
                                                        "/income/edit/" +
                                                        income.id
                                                    }
                                                    className="btn shadow btn-xs sharp me-1"
                                                >
                                                    <i className="fas fa-pencil-alt"></i>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteIncome(
                                                            income.id
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
        </div>
    );
};

export default Income;
