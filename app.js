'use strict'
var express = require('express');
//var cookieParser = require('cookie-parser');

var app = express();

//archivos de rutas
var camionesRouter = require('./routes/camiones');
var almacenesRouter = require('./routes/almacenes');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

//CORS

//rutas
app.use('/camiones', camionesRouter);
app.use('/almacenes', almacenesRouter);

//exportar 
module.exports = app;