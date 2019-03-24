const express = require('express');
const mongoose = require('mongoose')
const User = mongoose.model('users')
const router = express.Router();


router.put('/login', async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user) {
        res.json({emailError: 'User not found'})
    } else {
        if (user.password == password) res.json(user)
        else res.json({passwordError: 'wrong password'})
    }
})

router.put('/signup', async (req, res) => {
    const signupData = req.body
    signupData.password = signupData.password1
    delete signupData.password1
    delete signupData.password2

    const userByEmail = await User.findOne({email: signupData.email})
    const userByUserName = await User.findOne({username: signupData.username})
    if (userByEmail) {
        console.log('Email already registered',)
        res.json({emailError: 'Email already registered'})
    } else if (userByUserName) {
        console.log('Username already in use',)
        res.json({usernameError: 'Username already in use'})
    } else {
        const user = new User(signupData)
        user.save((err, val) => {
            res.json(val)
        })
    }
})

module.exports = router;