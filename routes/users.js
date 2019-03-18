const express = require('express');
const mongoose = require('mongoose')
const User = mongoose.model('users')
const router = express.Router();


router.put('/login', async (req,res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user) {
        res.json({emailError: 'User not found'})
    }
    else {
        if (user.password == password) res.json(user)
        else res.json({passwordError: 'wrong password'})
    }
})

module.exports = router;