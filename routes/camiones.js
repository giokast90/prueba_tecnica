'use strict'

var express = require('express');
var controladorCamion = require('../controladores/camiones');

var router = express.Router();

router.post("/", (req, res, next) => {
    controladorCamion.AsignarAlmacen(req.body)
        .then((response) => { //success
            res.send(response);//return the data
        }, (error) => { //failed
            res.status(404).send(error); //return error with 404
        }).catch((ex) => {//exception
            res.status(500).send(ex); //return exception with 500
        });
});

router.post("/asignarUbicacion", (req, res, next) => {
    controladorCamion.AsignarUbicacion(req.body)
        .then((response) => { //success
            res.send(response);//return the data
        }, (error) => { //failed
            res.status(404).send(error); //return error with 404
        }).catch((ex) => {//exception
            res.status(500).send(ex); //return exception with 500
        });
});

router.get("/sinAlmacen", (req, res, next) => {
    controladorCamion.CamionesSinAlmacen()
        .then((response) => { //success
            res.send(response);//return the data
        }, (error) => { //failed
            res.status(404).send(error); //return error with 404
        }).catch((ex) => {//exception
            res.status(500).send(ex); //return exception with 500
        });
});

router.get("/conAlmacen", (req, res, next) => {
    controladorCamion.CamionesConAlmacen()
        .then((response) => { //success
            res.send(response);//return the data
        }, (error) => { //failed
            res.status(404).send(error); //return error with 404
        }).catch((ex) => {//exception
            res.status(500).send(ex); //return exception with 500
        });
});

module.exports = router;