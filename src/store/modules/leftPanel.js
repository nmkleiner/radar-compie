import places from "./places";
import areas from "./areas";
import devices from "./devices";

export default {
    namespaced: true,
    state: {
        theme: 'places',
        filter: ''
    },
    getters: {
        items: (state) => state[state.theme].items
            .filter(item => item.heading.toLowerCase().includes(state.filter)),
    },
    actions: {
        setTheme({commit}, {theme}) {
            commit({type: 'setTheme', theme})
        },
        getItems({dispatch}) {
            dispatch('places/getItems')
            dispatch('areas/getItems')
            dispatch('devices/getItems')
        },
        filter({commit}, {filter}) {
            commit({type: 'setFilter', filter})
        }
    },
    mutations: {
        setTheme(state, {theme}) {
            state.theme = theme
        },
        setFilter(state, {filter}) {
            state.filter = filter
        }
    },
    modules: {
        places,
        areas,
        devices,
    }
}