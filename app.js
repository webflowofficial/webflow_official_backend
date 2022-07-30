const express = require('express');
const compression = require('compression');
const Router = require('./routes/routes');
//------------------------------------------------>


//app initialization
const app = express();

//midlewares------------------------------>
app.use(Router);
app.use(compression());
//EXPORT-------------->
module.exports = app;