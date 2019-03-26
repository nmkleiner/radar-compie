const express = require('express');
const mongoose = require('mongoose');
const Place = mongoose.model('places');
const router = express.Router();


router.post('/', async (req,res) => {
    const places = await Place.find({});
    res.json(places)
});

module.exports = router;