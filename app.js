const express = require('express');
const cors = require('cors');
const compression = require('compression');
const Router = require('./routes/routes');
//------------------------------------------------>


//app initialization
const app = express();

//midlewares------------------------------>
app.use(express.json());
app.use(cors());
app.use(Router);
app.use(compression());
app.use(express.static('./public'));


//EXPORT-------------->
module.exports = app;