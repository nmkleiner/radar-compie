import places from "./places";
import areas from "./areas";
import devices from "./devices";

export default {
    namespaced: true,
    state: {
        theme: 'places'
    },
    mutations: {
        setTheme(state, {theme}) {
            state.theme = theme
        }
    },
    actions: {
        setTheme({commit}, {theme}) {
            commit({type: 'setTheme', theme})
        }
    },
    getters: {
        items: (state) => state[state.theme].items,
        theme: (state) => state.theme,


    },
    modules: {
        places,
        areas,
        devices,
    }
}