const express = require('express');
const homeController = require('./../controllers/homeController');
//------------------------------------------------>

const Router = express.Router();

//routes
Router.route('/').get(homeController.getData);


//EXPORT-------------->
module.exports = Router;