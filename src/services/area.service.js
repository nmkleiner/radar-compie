const axios = require('axios');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';

export default {
    getAreas
}

async function getAreas() {
    const areas = await axios.get(`${BASE_URL}areas`)
    return areas.data
}