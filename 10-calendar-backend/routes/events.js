/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');

const router = Router();
router.use(validarJWT);

router.get('/', obtenerEventos);
router.post('/', crearEvento);
router.put('/:id', actualizarEvento);
router.delete('/:id', eliminarEvento);

module.exports = router;
