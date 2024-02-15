import React from 'react'

const AuthServices = () => {}


AuthServices.auth = async (data) => {
    let url = "/api/sign/";
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


export default AuthServices