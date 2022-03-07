// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const empresasController = require('./../controllers/empresasControllers.js');

router.get('/', empresasController.homeEmpresa)
router.get('/cadastro', empresasController.cadastroEmpresas)
router.get('/login', empresasController.loginEmpresa)
router.get('/login/manager', empresasController.managerAccount)
router.get('/login/boss', empresasController.bossAccount)
module.exports = router;