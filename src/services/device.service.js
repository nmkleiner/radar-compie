const axios = require('axios');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';

export default {
    getDevices
}

async function getDevices() {
    const devices = await axios.get(`${BASE_URL}devices`)
    return devices.data
}