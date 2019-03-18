const axios = require('axios');

export default {
    getPlaces
}

async function getPlaces() {
    const places = await axios.get('http://localhost:3000/places')
    console.log('places',places.data)
    return places.data
}