import React from 'react'

const MethodServices = () => {}

MethodServices.index = async () => {
    const url = "/api/method/";
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


export default MethodServices