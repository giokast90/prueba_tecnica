'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var almacenSchema = Schema({
    descripcion : String,
    latitud: Number,
    longitud: Number,
    capacidadTotal : Number,
    capacidadAlmacenada : Number,
    activo : Boolean,
    camiones: [{ type: Schema.Types.ObjectId, ref: 'camiones' }]
});

module.exports = mongoose.model('almacenes', almacenSchema);