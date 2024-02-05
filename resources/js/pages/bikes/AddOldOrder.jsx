import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MethodServices from "../../services/MethodServices";

const AddOldOrder = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [method, setMethod] = useState([]);
    const [state, setState] = useState({
        client_name: "",
        fName: "",
        nid: "",
        method_id: "",
        contact: "",
        address: "",
        brand: "",
        bike_name: "",
        bsquantity: "",
        engine_no: "",
        chas_no: "",
        manu: "",
        cc: "",
        seat_cap: "",
        ftyre: "",
        rtyre: "",
        color: "",
        sale_price: "",
        brake: "",
        registration: "",
        bank_draft: "",
        brta: "",
        cus_photo: "",
        b_copy: "",
        r_slip: "",
        t_token: "",
    });

    useEffect(() => {
        getMethod();
    }, []);

    useEffect(() => {
        if (id) {
            getBikeDetails(id);
        }
    }, [id]);

    const getBikeDetails = async (id) => {
        const res = await BikeServices.show(id);
        if (res.success) {
            setState(res.data.data);
        }
    };

    const getMethod = async () => {
        const res = await MethodServices.index();
        // console.log('data', res)
        if (res.success) {
            setMethod(res.data.data);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == "cus_photo") {
            const file = e.target.files[0];
            setState({
                ...state,
                cus_photo: file,
            });
        } else if (name == "b_copy") {
            const file = e.target.files[0];
            setState({
                ...state,
                b_copy: file,
            });
        } else if (name == "r_slip") {
            const file = e.target.files[0];
            setState({
                ...state,
                r_slip: file,
            });
        } else if (name == "t_token") {
            const file = e.target.files[0];
            setState({
                ...state,
                t_token: file,
            });
        } else {
            setState({
                ...state,
                [name]: value,
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        Object.keys(state).map((key) => {
            formdata.append(key, state[key]);
        });
        const res = await BikeSaleServices.save(formdata);
        if (res.success) {
            navigate("/bike-sale");
        }
    };
    return (
        <form id="myForm" method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Client Name<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        value={state.client_name}
                        placeholder=""
                        name="client_name"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Father's Name<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        value={state.fName}
                        placeholder=""
                        name="fName"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        NID No<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        value={state.nid}
                        placeholder=""
                        name="nid"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Invoice No<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        value={state.invoiceId}
                        placeholder=""
                        name="invoiceId"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="group_id">Payment Method</label>
                    <select className="form-control" id="" name="method_id" onChange={handleChange}>
                        <option value="">--Select Method --</option>
                        {method.map((method) => (
                            <option key={method.id} value={method.id}>
                                {method.method_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="dob">
                        Date<font >*</font>
                    </label>
                    <input
                        type="date"
                        className="form-control singledatepicker"
                        id="dob"
                        name="dob"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Contact<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="contact"
                        value={state.contact}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Address<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="address"
                        value={state.address}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Brand<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="brand"
                        value={state.brand}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Model<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="bike_name"
                        value={state.bike_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Quantity<font >*</font>
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="bsquantity"
                        value={state.bsquantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Engine No<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="engine_no"
                        value={state.engine_no}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Chassis No<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="chas_no"
                        value={state.chas_no}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Model of Vehicle<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="veh_no"
                        value={state.veh_no}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Make of Vehicle<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="m_veh"
                        value={state.m_veh}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Year of manufacture<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="manu"
                        value={state.manu}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        No of Cylinder with CC<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="cc"
                        value={state.cc}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Seating Capacity<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="seat_cap"
                        value={state.seat_cap}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Brake<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="brake"
                        value={state.brake}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Fornt Tyre Size<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="ftyre"
                        value={state.ftyre}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Rear Tyre Size<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="rtyre"
                        value={state.rtyre}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Weight<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="weight"
                        value={state.weight}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Color<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="color"
                        value={state.color}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Cost<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="bcost"
                        value={state.bcost}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Sale Price<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="sale_price"
                        value={state.sale_price}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Registration Fee<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="registration"
                        value={state.bank_draft}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Bank Draft<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="bank_draft"
                        value={state.client_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        BRTA<font >*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="brta"
                        value={state.brta}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="image">Customer Photo</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="cus_photo"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="image">Bank Copy</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="b_copy"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="image">Registration Slip</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="r_slip"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="image">Tax Token</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="t_token"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-12">
                    <button
                        type="submit"
                        className="btn btn-primary btn-sm"
                        name="pro_btn"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddOldOrder;
