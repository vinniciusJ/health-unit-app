import axios from "axios";

export const healthUnitAPI = axios.create({
    baseURL: 'http://192.168.1.101:3333',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    }
})