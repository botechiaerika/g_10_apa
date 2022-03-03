const mainController = require('../controllers/mainControllers');
const express = require('express');
const router = express.Router();

router.get('/', mainControllers.index);
router.get('/home', mainControllers.home);
router.get('/buscarProducto', mainControllers.search)

module.exports = router;

/*var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/blog', function(req, res, next) {
    res.render('blog');
});
module.exports = router; * /