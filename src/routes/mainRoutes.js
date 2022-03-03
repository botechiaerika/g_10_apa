const mainController = require('./../controllers/mainControllers');
const express = require('express');
const router = express.Router();

router.get('/', mainControllers.index);
router.get('/home', mainControllers.home);
router.get('/buscarProductos', mainControllers.index);

module.exports = router;