'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var camionSchema = Schema({
    almacen: { type: Schema.Types.ObjectId, ref: 'almacenes' },
    descripcion: String,
    latitud: Number,
    longitud: Number,
    volumenCarga: Number,
    activo: Boolean
});

module.exports = mongoose.model('camiones', camionSchema);