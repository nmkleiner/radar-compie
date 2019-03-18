import userService from "../../services/user.service";

export default {
    namespaced: true,
    state: {
        loggedInUser: {}
    },
    actions: {
        async login({commit}, {loginData}) {
            const user = await userService.login(loginData)
            if (user) {
                commit({type: 'setLoggedIUser', user})
                return user
            } else return null;
        },
    },
    mutations: {
        setLoggedIUser(state, {user}) {
            state.loggedInUser = user
        }
    },
}