import React from 'react'

const ServiceServices = () => {}

ServiceServices.show = async (data) => {
    url = "/api/service/" + data ;
    const res = await axios
        .get(url, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return res;
};


export default ServiceServices