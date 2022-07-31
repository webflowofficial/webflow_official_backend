const express = require('express');
const homeController = require('../controllers/landingPage');
//------------------------------------------------>                

const Router = express.Router();

//routes
Router.route('/').get(homeController.getData);
Router.route('/contact').post(homeController.contact);


//EXPORT-------------->
module.exports = Router;