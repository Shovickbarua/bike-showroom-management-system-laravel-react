import React from 'react'

const BikeSaleServices = () => {}

BikeSaleServices.index = async () => {
    const url = "/api/bike-sale/";
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

BikeSaleServices.save = async (data) => {
    let url = "/api/bike-sale/";
    // if (data.id) url = "/api/bike-sale/" + data.id + "?_method=PUT";
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

BikeSaleServices.show = async (id) => {
    const url = "/api/bike-sale/" + id;
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

BikeSaleServices.delete = async (id) => {
    const url = "/api/bike-sale/" + id;
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


export default BikeSaleServices