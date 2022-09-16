const { response } = require('express');

const obtenerEventos = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'obtenerEventos'
    });
};

const crearEvento = (req, resp = response) => {
    console.log(req.body);
    resp.json({
        ok: true,
        msg: 'crearEvento'
    });
};

const actualizarEvento = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'actualizarEvento'
    });
};

const eliminarEvento = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'eliminarEvento'
    });
};

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};