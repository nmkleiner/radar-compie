const express = require('express');
const mongoose = require('mongoose');
const Area = mongoose.model('areas');
const router = express.Router();



router.get('/', async (req,res) => {
    const areas = await Area.find({});
    res.json(areas)
});

module.exports = router;