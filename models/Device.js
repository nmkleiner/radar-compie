const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlaceSchema = new Schema({
    icon:{
        type:String,
        required: true
    },
    iconFormat: {
      type: String,
      // default
    },
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