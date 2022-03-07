// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('./../controllers/mainControllers');

router.get('/', mainController.index);
router.get('/home', mainController.home);
router.get('/contacto', mainController.contacto);
router.get('/locales', mainController.home);
router.get('/buscar', mainController.buscar);
router.get('/buscarProducto', mainController.buscarProducto);
router.get('/detallesProducto', mainController.detallesProducto);
router.get('/detalleProducto', mainController.detalleProducto);
router.get('/loginEmpresa', mainController.loginEmpresa);
router.get('/reservas', mainController.reservas);
router.get('/tablePath' ,mainController.tablePath);

module.exports = router;


   
