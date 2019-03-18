const express = require('express');
const mongoose = require('mongoose')
const Device = mongoose.model('devices')
const router = express.Router();


router.get('/', async (req,res) => {
    const devices = await Device.find({})
    res.json(devices)
})

module.exports = router;