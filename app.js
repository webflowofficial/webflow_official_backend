const express = require('express');
const Router = require('./routes/routes');
//------------------------------------------------>


//app initialization
const app = express();

//midlewares------------------------------>
app.use(Router);

//EXPORT-------------->
module.exports = app;