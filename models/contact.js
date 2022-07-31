const mongoose = require('mongoose');
//------------------------------------------------>

//Schema
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required"]
    },
    email: {
        type: String,
        required: [true, "An email is required"]
    },
    message: {
        type: String,
        required: [true, "A message is required"]
    }
});

//Model
const Model = mongoose.model('Contact', Schema);


//EXPORT-------------->
module.exports = Model;