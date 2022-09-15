const { response } = require('express');
const { validatorResults } = require('express-validator');

const validarCampos = (req, res = response, next) => {
    const errors = validarCampos(req);
    if(!errors.isEmpty()){
        return res
    };
    next();
};

module.exports = {
    validarCampos
};