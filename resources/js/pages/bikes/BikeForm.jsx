import React from "react";

const BikeForm = () => {
    return (
        <form id="myForm" method="POST" action="" enctype="multipart/form-data">
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
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
                        value=""
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="image">Image Upload</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
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
