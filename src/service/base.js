import axios from 'axios';

// service endpoint
const apiEndpoint = `http://localhost:3001/`;

const apiService = axios.create({
    baseURL : apiEndpoint,
});

export function deleteResource(apiUrl, payload = {}){
    return Promise.resolve(apiService.delete(`${apiEndpoint}${apiUrl}`,{
        data : { ...payload},
    }));
}

export function get(apiUrl) {
    return Promise.resolve(apiService.get(`${apiEndpoint}${apiUrl}`));
}

export function post(apiUrl, postData){
    return Promise.resolve(apiService.post(`${apiEndpoint}${apiUrl}`,postData));
}