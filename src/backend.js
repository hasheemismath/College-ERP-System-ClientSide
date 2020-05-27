import axios from "axios";

export const API = process.env.REACT_APP_BACKEND;

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
