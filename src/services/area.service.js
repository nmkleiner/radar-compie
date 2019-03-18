import ApiService from './apiService'
const apiService = new ApiService()

export default {
    getAreas
}

async function getAreas() {
    const areas = await apiService.axios().get(`${apiService.getUrl()}areas`)
    return areas.data
}