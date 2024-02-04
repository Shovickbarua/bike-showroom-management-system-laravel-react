import React, { useState } from 'react'
import ExpenseServices from '../../services/ExpenseServices';

const Expense = () => {
	const [state, setState] = useState([]);

    useEffect(() => {
        getExpense();
    }, []);

    const getExpense = async () => {
        const res = await ExpenseServices.index();
        if (res.success) {
            setState(res.data.data);
        }
    };

    const handleDeleteExpense = async (id) => {
        const confirmMsg = confirm("Are you sure!");
        if (confirmMsg) {
            const res = await ExpenseServices.delete(id);
            // console.log("res", res);
            if (res.success) {
                getExpense();
            }
        }
    };
  return (
    <div class="row">
			<div class="col-lg-12">
				<div class="card">
				  <div class="card-header">
					<h3 class="card-title">All Expense</h3>
					<Link to='' class="btn btn-success float-right btn-sm"><i class="fa fa-plus-circle"></i>Add Expense</Link>
				  </div>
					{/* <!-- /.card-header --> */}
					<div class="card-body">
          <table id="example1" class="table table-bordered table-striped">
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
                            {state.map((expense, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{expense.ex_name}</td>
                                    <td>{expense.amount}</td>
                                    <td>{expense.dob}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link
                                                to={
                                                    "/expense/edit/" +
                                                    expense.id
                                                }
                                                className="btn shadow btn-xs sharp me-1"
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDeleteExpense(
                                                        expense.id
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
  )
}

export default Expense