const mongoose = require('mongoose');
//------------------------------------------------>

//Schema
const Schema = new mongoose.Schema({
    navBarItems: {
        type: [String],
        required: [true, "Nav Bar items are required"]
    },
    topLine: {
        type: String,
        required: [true, "A top line is required"]
    },
    brandName: {
        type: String,
        required: [true, "A brand name is required"]
    },
    brandDescription: {
        type: String,
        required: [true, "A brand description is required"]
    },
    brandButton: {
        type: String,
        required: [true, "A brand button is required"]
    },
    aboutUsText: {
        type: String,
        required: [true, "About us text is required"]
    },
    workedCompaniesDetails: {
        type: [Object],
        required: [true, "Worked companies details  are required"]
    },
    featuredProjectsDetails: {
        type: [Object],
        required: [true, "Featured Project details  are required"]
    },
    footer: {
        type: String,
        required: [true, "A footer is required"]
    },


});

//Model
const Model = mongoose.model('LandingPage', Schema);


//EXPORT-------------->
module.exports = Model;