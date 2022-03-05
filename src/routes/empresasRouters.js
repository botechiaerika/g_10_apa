// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const empresasControllers = require('./../controllers/empresasControllers');

router.get('/', empresasControllers.homeEmpresa);
router.get('/cadastro', empresasControllers.cadastroEmpresa);

module.exports = router;