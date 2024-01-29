const BikeServices = () => {};

BikeServices.index = async () => {
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

BikeServices.save = async (data) => {
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

BikeServices.show = async (id) => {
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

BikeServices.delete = async (id) => {
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

export default BikeServices;
