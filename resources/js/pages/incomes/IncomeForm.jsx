import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IncomeServices from "../../services/IncomeServices";

const IncomeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [state, setState] = useState({
        in_name: "",
        amount: "",
        dob: "",
    });

    useEffect(() => {
        if (id) {
            getIncome(id);
        }
    }, [id]);

    const getIncome = async (id) => {
        const res = await IncomeServices.show(id);
        if (res.success) {
            setState(res.data.data);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        id ? (state.id = id) : "";

        const res = await IncomeServices.save(state);
        if (res.success) {
            navigate("/income");
        }
    };

    return (
        <form id="myForm" method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="name">
                        Income Name<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=""
                        name="in_name"
                        value=""
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        Amount<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=""
                        name="amount"
                        value=""
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="dob">
                        Date<font style="color:red">*</font>
                    </label>
                    <input
                        type="date"
                        className="form-control singledatepicker"
                        id="dob"
                        name="dob"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group col-md-12">
                    <button
                        type="submit"
                        className="btn btn-primary btn-sm"
                        name="cat_btn"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default IncomeForm;
