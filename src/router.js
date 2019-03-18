import Vue from 'vue'
import Router from 'vue-router'
import userService from './services/user.service'
import radarPage from './views/RadarPage.vue'

const loginPage = () => import('./views/LoginPage.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'radar-page',
            component: radarPage,
            beforeEnter: async (to, from, next) => {
                const isLoggedIn = await userService.isLoggedIn()
                if (isLoggedIn) {
                    next()
                } else {
                    next('/login')
                }
            }
        },
        {
            path: '/login',
            name: 'login-page',
            component: loginPage
        }
    ]
})
