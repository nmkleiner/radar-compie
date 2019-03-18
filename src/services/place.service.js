const axios = require('axios');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';

export default {
    getPlaces
}

async function getPlaces() {
    const places = await axios.get(`${BASE_URL}places`)
    return places.data
}