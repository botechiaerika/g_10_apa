// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('./../controllers/mainControllers');

router.get('/', mainController.index);
router.get('/contacto', mainController.contacto);
router.get('/tablePath' ,mainController.tablePath);

module.exports = router;


   
