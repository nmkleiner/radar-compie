import ApiService from './apiService'
const apiService = new ApiService()

export default {
    getTargets
}

async function getTargets() {
    const targets = await apiService.axios().get(`${apiService.getUrl()}targets`)
    return targets.data
}