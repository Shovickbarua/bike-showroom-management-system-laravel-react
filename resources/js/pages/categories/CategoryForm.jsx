import React, { useEffect, useState } from "react";
import CategoryServices from "../../services/CategoryServices";
import { useNavigate, useParams } from "react-router-dom";

const CategoryForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({
        cat_name: "",
    });

    useEffect(() => {
        getCategory(id);
    }, [id]);

    const getCategory = async (id) => {
        const res = await CategoryServices.show(id);
        if (res.success) {
            setData(res.data.data);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setData((prevData) => ({
        //     ...prevData,
        //     [name]: value,
        // }));
        // setData({
        //     ...data,
        //     [e.target.name]: e.target.value,
        // });
        setData({
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await CategoryServices.save(data);
        if (res.success) {
            navigate("/categories");
        }
    };

    return (
        <form id="myForm" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="name">
                        Category<font>*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Category"
                        name="cat_name"
                        value={data.cat_name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group col-md-12">
                    <button
                        type="submit"
                        className="btn btn-primary btn-sm"
                        // name="cat_btn"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CategoryForm;
