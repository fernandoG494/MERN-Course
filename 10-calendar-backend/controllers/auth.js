const { response } = require('express');
const Usuario = require('../Models/Usuario');

const createUsuario = async(req, resp = response) => {
    // const { name, email, password } = req.body;

    try{
        const usuario = new Usuario(req.body);
        await usuario.save();
        resp.status(201).json({
            ok: true,
            msg: 'registro exitoso'
        });
    }catch(error){
        resp.status(500).json({
            ok: false,
            msg: 'Error creando el usuario'
        });
    };
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