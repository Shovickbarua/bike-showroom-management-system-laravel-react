const IncomeServices = () => {};

IncomeServices.index = async () => {
    const url = "/api/expense/";
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

IncomeServices.save = async (data) => {
    let url = "/api/expense/";
    if (data.id) url = "/api/expense/" + data.id + "?_method=PUT";
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

IncomeServices.show = async (id) => {
    const url = "/api/expense/" + id;
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

IncomeServices.delete = async (id) => {
    const url = "/api/expense/" + id;
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

export default IncomeServices;
