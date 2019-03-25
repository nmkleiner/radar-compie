const express = require('express');
const mongoose = require('mongoose');
const jwtService = require('../keys/JWT.service')
const Device = mongoose.model('devices');
const router = express.Router();


router.get('/', async (req,res) => {
    const devices = await Device.find({});
    res.json(devices)
});

module.exports = router;