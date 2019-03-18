const axios = require('axios');

export default class apiService {
    constructor() {
        this.url = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';
    }
    getUrl() {
        return this.url
    }
    axios() {
        return axios
    }
}