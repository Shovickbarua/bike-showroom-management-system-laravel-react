import axios from "axios";
import React from "react";

const CategoryServices = () => {};

CategoryServices.index = async () => {
    const url = "/api/category/";
    const res = await axios
        .get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

CategoryServices.save = async (data) => {
    let url = "/api/category/";
    if (data.id) url = "/api/category/" + data.id + "?_method=PUT";
    const res = await axios
        .post(url, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

CategoryServices.show = async (id) => {
    const url = "/api/category/" + id;
    const res = await axios
        .get(url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

CategoryServices.delete = async (id) => {
    const url = "/api/category/" + id;
    const res = await axios
        .delete(url)
        .then((response) => {
            console.log("res", response);
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};

export default CategoryServices;
