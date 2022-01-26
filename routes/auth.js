const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');

const router = Router();

//Crear un nuevo usuario
router.post('/new', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({min: 6}),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearUsuario);

//Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({min: 6}),
    validarCampos
], loginUsuario);

//Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;