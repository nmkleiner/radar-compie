const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlaceSchema = new Schema({
    heading:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

// Create collection and add schema
mongoose.model('places', PlaceSchema, 'places');