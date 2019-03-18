const axios = require('axios');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';

export default {
    getTargets
}

async function getTargets() {
    const targets = await axios.get(`${BASE_URL}targets`)
    return targets.data
}