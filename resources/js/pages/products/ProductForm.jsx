import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductServices from "../../services/ProductServices";
import CategoryServices from "../../services/CategoryServices";

const ProductForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState([]);
    const [state, setState] = useState({
        product_name: "",
        quantity: "",
        SKU: "",
        cat_id: "",
        dob: "",
        cost: "",
        // image: "",
    });

    useEffect(() => {
        getCategory();
    }, []);

    useEffect(() => {
        if (id) {
            getProduct(id);
        }
    }, [id]);

    const getCategory = async () => {
        const res = await CategoryServices.index();
        if (res.success) {
            setCategory(res.data.data);
        }
    };

    const getProduct = async (id) => {
        const res = await ProductServices.show(id);
        if (res.success) {
            setState(res.data.data);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        id ? (state.id = id) : "";
        console.log("res", state);
        const res = await ProductServices.save(state);
        if (res.success) {
            navigate("/product");
        }
    };

    // let accountDropdown = [<option value="">{t("Please Select")}</option>];
    // if (state.accounts) {
    //     state.accounts.map(account => (
    //         accountDropdown.push(<option key={account.id} value={account.id}>{account.name}</option>)
    //     ));
    // }

    return (
        <form id="myForm" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="name">
                        Product<font>*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Name"
                        name="product_name"
                        value={state.product_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="group_id">Select Category</label>
                    <select
                        className="form-control"
                        id="cat_id"
                        name="cat_id"
                        onChange={handleChange}
                    >
                        <option value="">--Select Category --</option>
                        {category.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.cat_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        SKU<font>*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="SKU"
                        name="SKU"
                        value={state.SKU}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="dob">
                        Date<font>*</font>
                    </label>
                    <input
                        type="date"
                        className="form-control singledatepicker"
                        id="dob"
                        name="dob"
                        value={state.dob}
                        autocomplete="on"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        Quantity<font>*</font>
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="quantity"
                        value={state.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        Cost Price<font>*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder=""
                        name="cost"
                        value={state.cost}
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

export default ProductForm;
