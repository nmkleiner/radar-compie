const express = require('express');
const mongoose = require('mongoose');
const Target = mongoose.model('targets');
const router = express.Router();


router.get('/', async (req,res) => {
    const targets = await Target.find({})
        .populate('area');
    res.json(targets)
});

module.exports = router;