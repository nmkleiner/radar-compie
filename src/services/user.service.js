const axios = require('axios');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '//localhost:3000/';

export default {
    login,
    isLoggedIn
}

async function login(loginData) {
    const {email,password} = loginData
    const res = await axios.put(`${BASE_URL}users/login`, {email,password})
    if (res.data.email) {
        sessionStorage.setItem('radarUser', JSON.stringify({email: res.data.email}))
    }
    return res.data
}

async function isLoggedIn() {
    const user = await JSON.parse(sessionStorage.getItem('radarUser'))
    return !!user
}
