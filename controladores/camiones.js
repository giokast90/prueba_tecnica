'use strict'
var Camion = require('../modelos/camiones');
var Almacen = require('../modelos/almacenes');

exports.AsignarAlmacen = async (params) => {
    try {
        const almacen = await Almacen.findById(params.idAlmacen);
        const camion = await Camion.findById(params.idCamion);
        camion.almacen = params.idAlmacen;
        camion.latitud = almacen.latitud;
        camion.longitud = almacen.longitud;
        almacen.camiones.push(params.idCamion);
        await camion.save();
        await almacen.save();
        return camion;
    } catch (error) {
        console.log(error)
    }
}

exports.CamionesSinAlmacen = async () => {
    try {
        const camiones = await Camion.find({ almacen: { $eq: null } });
        return camiones;
    } catch (error) {
        console.log(error)
    }
}

exports.CamionesConAlmacen = async () => {
    try {
        const camiones = await Camion.find({ almacen: { $ne: null } });
        return camiones;
    } catch (error) {
        console.log(error)
    }
}

exports.AsignarUbicacion = async (params) => {
    try {
        const camion = await Camion.findById(params.idCamion);
        camion.latitud = params.latitud;
        camion.longitud = params.longitud;
        await camion.save();
        return camion;
    } catch (error) {
        console.log(error)
    }
}