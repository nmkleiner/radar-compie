const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TargetSchema = new Schema({
    active: {
        type: Boolean,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    SerialNum: {
        type: String,
        required: true
    },
    heading:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

// Create collection and add schema
mongoose.model('targets', TargetSchema, 'targets');