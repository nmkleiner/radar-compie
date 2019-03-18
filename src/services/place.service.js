import ApiService from './apiService'
const apiService = new ApiService()

export default {
    getPlaces
}

async function getPlaces() {
    const places = await apiService.axios().get(`${apiService.getUrl()}places`)
    return places.data
}