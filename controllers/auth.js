const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {

    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({
            ok: false,
            msg: erros.mapped()
        });
    }

    const {email, name, password} = req.body;

    return res.json({
        ok: true,
        msg: 'Crear usuario /new',
    });
}

const loginUsuario = (req, res = response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            msg: errors.mapped()
        })
    }

    const {email, password} = req.body;

    return res.json({
        ok: true,
        msg: 'Login de usuario /',
    });
}

const revalidarToken = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew',
    });
}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}