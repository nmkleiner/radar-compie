const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AreaSchema = new Schema({
    img:{
        type:String,
        required: true
    },
    imgFormat: {
      type: String,
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
mongoose.model('areas', AreaSchema, 'areas');