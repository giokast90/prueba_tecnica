'use strict'

var express = require('express');
var controladorAlmacen = require('../controladores/almacenes');

var router = express.Router();

router.get("/", (req, res, next) => {
    controladorAlmacen.obtenerAlmacenes()
        .then((response) => { //success
            res.send(response);//return the data
        }, (error) => { //failed
            res.status(404).send(error); //return error with 404
        }).catch((ex) => {//exception
            res.status(500).send(ex); //return exception with 500
        });
});

module.exports = router;