import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddOldOrder = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [method, setMethod] = useState("");
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
        id ? (state.id = id) : "";

        const res = await BikeSaleServices.save(state);
        if (res.success) {
            navigate("/bike-sale");
        }
    };
    return (
        <form id="myForm" method="POST" onSubmit={handleSubmit}>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="name">
                        Client Name<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        value={state.client_name}
                        placeholder=""
                        name="client_name"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Father's Name<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        value={state.fName}
                        placeholder=""
                        name="fName"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        NID No<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        value={state.nid}
                        placeholder=""
                        name="nid"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Invoice No<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        value={state.invoiceId}
                        placeholder=""
                        name="invoiceId"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="group_id">Payment Method</label>
                    <select class="form-control" id="cat_id" name="method_id">
                        <option value="">--Select Method --</option>
                        {method.map((method) => (
                            <option key={method.id} value={method.id}>
                                {method.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="dob">
                        Date<font style="color:red">*</font>
                    </label>
                    <input
                        type="date"
                        class="form-control singledatepicker"
                        id="dob"
                        name="dob"
                        autocomplete="off"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Contact<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="contact"
                        value={state.contact}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Address<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="address"
                        value={state.address}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="name">
                        Brand<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="brand"
                        value={state.brand}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Model<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="bike_name"
                        value={state.bike_name}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Quantity<font style="color:red">*</font>
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="bsquantity"
                        value={state.bsquantity}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Engine No<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="engine_no"
                        value={state.engine_no}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Chassis No<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="chas_no"
                        value={state.chas_no}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Model of Vehicle<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="veh_no"
                        value={state.veh_no}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Make of Vehicle<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="m_veh"
                        value={state.m_veh}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Year of manufacture<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="manu"
                        value={state.manu}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        No of Cylinder with CC<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="cc"
                        value={state.cc}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Seating Capacity<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="seat_cap"
                        value={state.seat_cap}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Brake<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="brake"
                        value={state.brake}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Fornt Tyre Size<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="ftyre"
                        value={state.ftyre}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Rear Tyre Size<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="rtyre"
                        value={state.rtyre}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Weight<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="weight"
                        value={state.weight}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Color<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="color"
                        value={state.color}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Cost<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="bcost"
                        value={state.bcost}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Sale Price<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="sale_price"
                        value={state.sale_price}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Registration Fee<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="registration"
                        value={state.bank_draft}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        Bank Draft<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="bank_draft"
                        value={state.client_name}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="name">
                        BRTA<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id=""
                        placeholder=""
                        name="brta"
                        value={state.brta}
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="image">Customer Photo</label>
                    <input
                        type="file"
                        class="form-control"
                        id="image"
                        name="cus_photo"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="image">Bank Copy</label>
                    <input
                        type="file"
                        class="form-control"
                        id="image"
                        name="b_copy"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="image">Registration Slip</label>
                    <input
                        type="file"
                        class="form-control"
                        id="image"
                        name="r_slip"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-4">
                    <label for="image">Tax Token</label>
                    <input
                        type="file"
                        class="form-control"
                        id="image"
                        name="t_token"
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group col-md-12">
                    <button
                        type="submit"
                        class="btn btn-primary btn-sm"
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
