import placeService from '../../services/place.service'
import apiService from '../../services/apiService'
const api = new apiService()

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items: (state) => state.items
    },
    actions: {
        async getItems({commit}) {
            console.log('babababa',api.getUrl())
            const places = await placeService.getPlaces()
            commit({type: 'setPlaces', places})
        }
    },
    mutations: {
        setPlaces(state, {places}) {
            state.items = places
        }
    },
}