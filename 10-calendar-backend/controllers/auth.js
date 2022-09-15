const { response } = require('express');
const { validatorResult } = require('express-validators');

const createUsuario = (req, resp = response) => {
    const { name, email, password } = req.body;

    resp.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    });
};

const loginUsuario = (req, resp) => {
    const { email, password } = req.body;

    resp.json({
        ok: true,
        msg: 'registro',
        email,
        password
    });
};

const revalidarToken = (req, resp) => {
    resp.json({
        ok: true,
        msg: 'renew'
    });
};

module.exports = {
    revalidarToken,
    createUsuario,
    loginUsuario
};