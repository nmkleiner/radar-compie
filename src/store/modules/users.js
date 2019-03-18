import areaService from "../../services/area.service";

export default {
    namespaced: true,
    state: {
        items: []
    },
    mutations: {
        setAreas(state, {areas}) {
            state.items = areas
        }
    },
    actions: {
        async getItems({commit}) {
            const areas = await areaService.getAreas()
            commit({type: 'setAreas', areas})
        }
    },
    getters: {
        items: (state) => state.items

    }
}