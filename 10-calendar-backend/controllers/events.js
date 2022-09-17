const { response } = require('express');
const Evento = require('../Models/Evento');

const obtenerEventos = async(req, resp = response) => {
    const eventos = await Evento.find().populate('user', 'name');
    resp.json({
        ok: true,
        eventos
    });
};

const crearEvento = async(req, resp = response) => {
    const evento = new Evento(req.body);
    
    try{
        evento.user = req.uid;

        const eventoGuardado = await evento.save();
        resp.json({
            ok: true,
            evento: eventoGuardado
        });
    }catch(error){
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear el evento'
        });
    };
};

const actualizarEvento = async(req, resp = response) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try{
        const evento = await Evento.find(eventoId);

        if(!evento){
            return resp.status(404).json({
                ok: false,
                msg: 'No se encontró el evento'
            });
        };

        if(evento.user.toString() !== uid){
            return resp.status(401).json({
                ok: false,
                msg: 'No tiene privilegios de edición de este evento'
            });
        };

        
        
    }catch(error){
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error actualizando el evento'
        });
    };

    const nuevoEvento = {
        ...req.body,
        user: uid
    };

    const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true });

    resp.json({
        ok: true,
        eventoActualizado
    });
};

const eliminarEvento = async(req, resp = response) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try{
        const evento = await Evento.findById(eventoId);

        if(!evento){
            return resp.status(404).json({
                ok: false,
                msg: 'No se encontró el evento'
            });
        };

        if(evento.user.toString() !== uid){
            return resp.status(401).json({
                ok: false,
                msg: 'No tiene privilegios de edición de este evento'
            });
        };

        await Evento.findByIdAndDelete(eventoId);
        resp.json({ ok: true });

    }catch(error){
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error eliminando el evento'
        });
    };
};

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};
