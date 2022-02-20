import Api from './Api';

const url = "/tours";

const getAll = (page, size) => {

    const parameters = {
        page,
        size
        //sort: `${sortField},${sortType}`
    }

    return Api.get(`${url}`, { params: parameters });
};

const getById = (id) => {
    return Api.get(`${url}/${id}`);
};

const api = { getAll, getById }
export default api;