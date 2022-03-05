// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('./../controllers/mainControllers');

router.get('/', mainController.index);
router.get('/home', mainController.home);
router.get('/contacto', mainController.contacto);
router.get('/buscar', mainController.buscar);

module.exports = router;