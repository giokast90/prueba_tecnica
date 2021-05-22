'use strict'
var Almacen = require('../modelos/almacenes');

exports.obtenerAlmacenes = async() => {
    const almacenes = await Almacen.find();
    return almacenes
}