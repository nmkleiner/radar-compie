import places from "./places";
import areas from "./areas";
import devices from "./devices";

export default {
    namespaced: true,
    state: {
        theme: 'places'
    },
    getters: {
        items: (state) => state[state.theme].items,
        theme: (state) => state.theme,
    },
    actions: {
        setTheme({commit}, {theme}) {
            commit({type: 'setTheme', theme})
        },
        getItems({dispatch}) {
            dispatch('places/getItems')
            dispatch('areas/getItems')
            dispatch('devices/getItems')
        }
    },
    mutations: {
        setTheme(state, {theme}) {
            state.theme = theme
        }
    },
    modules: {
        places,
        areas,
        devices,
    }
}