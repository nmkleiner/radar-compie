const express = require('express');
const mongoose = require('mongoose');
const Target = mongoose.model('targets');
const router = express.Router();


router.post('/', async (req,res) => {
    const targets = await Target.find({});
    res.json(targets)
});

module.exports = router;