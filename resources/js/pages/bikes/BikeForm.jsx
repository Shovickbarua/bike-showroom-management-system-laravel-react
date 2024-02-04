import React, { useEffect, useState } from "react";
import BikeServices from "../../services/BikeServices";
import { useNavigate, useParams } from "react-router-dom";
const BikeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({
        brand: "",
        bike_name: "",
        dob: "",
        bquantity: "",
        bcost: "",
        color: "",
        engine_no: "",
        chas_no: "",
        m_veh: "",
        manu: "",
        cc: "",
        seat_cap: "",
        brake: "",
        ftyre: "",
        rtyre: "",
        weight: "",
        image: "",
    });

    useEffect(() => {
        if (id) {
            getBike();
        }
    }, [id]);

    const getBike = async (id) => {
        const res = await BikeServices.show(id);
        if (res.success) {
            setState(res.data.data);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "image") {
            const file = e.target.files[0];
            setState({
                ...state,
                image: file,
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
        id ? (state.bike_id = id) : "";
        let formdata = new FormData();
        Object.keys(state).map((key) => {
            formdata.append(key, state[key]);
        });
        const res = await BikeServices.save(formdata);
        if (res.success) {
            navigate("/bike");
        }
    };
    return (
        <form id="myForm" onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="name">
                        Brand<font className="text-danger">*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Name"
                        name="brand"
                        value={state.brand}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        Model No<font className="text-danger">*</font>
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
                    <label for="dob">
                        Date<font className="text-danger">*</font>
                    </label>
                    <input
                        type="date"
                        className="form-control singledatepicker"
                        id="dob"
                        name="dob"
                        value={state.dob}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        Quantity<font className="text-danger">*</font>
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="bquantity"
                        value={state.bquantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        Cost Price<font className="text-danger">*</font>
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
                    <label for="name">
                        Color<font className="text-danger">*</font>
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
                    <label for="name">
                        Engine No<font className="text-danger">*</font>
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
                    <label for="name">
                        Chassis No<font className="text-danger">*</font>
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
                    <label for="name">
                        Make of Vehicle<font className="text-danger">*</font>
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
                    <label for="name">
                        Year of Manufacture
                        <font className="text-danger">*</font>
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
                    <label for="name">
                        No of Cylinder with CC
                        <font className="text-danger">*</font>
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
                    <label for="name">
                        Seating Capacity<font className="text-danger">*</font>
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
                    <label for="name">
                        Brake<font className="text-danger">*</font>
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
                    <label for="name">
                        Front Tyre Size<font className="text-danger">*</font>
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
                    <label for="name">
                        Rear Tyre Size<font className="text-danger">*</font>
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
                    <label for="name">
                        Weight<font className="text-danger">*</font>
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
                    <label for="image">Image Upload</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-12">
                    <button type="submit" className="btn btn-primary btn-sm">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default BikeForm;
