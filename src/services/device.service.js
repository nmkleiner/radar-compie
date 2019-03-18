import ApiService from './apiService'
const apiService = new ApiService()

export default {
    getDevices
}

async function getDevices() {
    const devices = await apiService.axios().get(`${apiService.getUrl()}devices`)
    return devices.data
}