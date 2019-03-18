import targetService from "../../services/target.service";

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
            const targets = await targetService.getTargets()
            commit({type: 'setTargets', targets})
        }
    },
    mutations: {
        setTargets(state, {targets}) {
            state.items = targets
        }
    },
}