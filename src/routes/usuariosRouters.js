// ************ Require's ************
const express = require('express');
const router = express.Router();

/************ Controller Require ************/
const usuariosController = require('./../controllers/usuariosControllers.js');


router.get('/', usuariosController.register);
router.get('/login/miCuenta', usuariosController.miCuenta);
router.get('/login', usuariosController.iniciarSeccion);
module.exports = router;