// ************ Require's ************
const express = require('express');
const router = express.Router();

/************ Controller Require ************/
const usuariosController = require('./../controllers/usuariosControllers.js');

router.get('/usuarios', usuariosController.miCuenta);
router.get('/usuarios/login', usuariosController.iniciarSeccion);
module.exports = router;