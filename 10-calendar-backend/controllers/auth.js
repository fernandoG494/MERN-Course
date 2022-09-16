const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../Models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const createUsuario = async(req, resp = response) => {
    console.log('POST /api/auth/new');
    const { name, email, password } = req.body;

    try{
        let usuario = await Usuario.findOne({ email });
        
        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario existe dentro de la base de datos'
            });
        };
        
        usuario = new Usuario(req.body);
        
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);
        
        resp.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    }catch(error){
        resp.status(500).json({
            ok: false,
            msg: 'Error creando el usuario'
        });
    };
};

const loginUsuario = async(req, resp) => {
    console.log('POST /api/auth/');
    const { email, password } = req.body;   
    
    try{
        let usuario = await Usuario.findOne({ email });
        
        if(!usuario){
            return resp.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        };

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            return resp.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        };

        // Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);

        resp.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    }catch(error){
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al hacer login'
        });
    };
};

const revalidarToken = async (req, resp = response) => {
    const { uid, name } = req;

    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        token
    });
};

module.exports = {
    revalidarToken,
    createUsuario,
    loginUsuario
};