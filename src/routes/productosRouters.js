// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productoController = require('./../controllers/productosControllers.js');

router.get('/', productoController.productosHome)
router.get('/buscar', productoController.buscarProducto)
router.get('/buscar01', productoController.buscar01)
router.get('/buscar02', productoController.buscar02)
router.get('/detalles01', productoController.detalles01)
router.get('/detalles02', productoController.detalles02)
router.get('/reservas', productoController.reserve)
module.exports = router;