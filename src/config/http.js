import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = "/api";
export default {
    post: (url, params) => {
        params = qs.stringify(params);
        return axios.post("/" + url, params);
    },
    get: url => {
        return axios.get("/" + url);
    }
};