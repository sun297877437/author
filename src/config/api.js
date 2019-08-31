import axios from './http'

export function apiLogin(params) {
    return axios.post('login/index', params);
}