const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');



require('./models/Place');
require('./models/Area');
require('./models/Device');
require('./models/Target');
require('./models/User');

// Load routes
const places = require('./routes/places');
const areas = require('./routes/areas');
const devices = require('./routes/devices');
const targets = require('./routes/targets');
const users = require('./routes/users');


//Map Global Promises
mongoose.Promise = global.Promise;

//Connect radar
mongoose.connect('mongodb://noam:Nmkl9634@ds139295.mlab.com:39295/radar-compie', {useNewUrlParser: true})
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log(err));



const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))


//Use routes
app.use('/places', places);
app.use('/areas', areas);
app.use('/devices', devices);
app.use('/targets', targets);
app.use('/users', users);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server started on port ', port)
})