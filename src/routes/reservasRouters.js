// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usuariosController = require('./../controllers/usuariosControllers.js');

router.get('/', usuariosController.miCuenta);
router.get('/home', usuariosController.home);
router.get('/contacto', usuariosController.contacto);


module.exports = router;