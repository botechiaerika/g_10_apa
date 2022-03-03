const path = require('path');

const controlador = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, '../views/index.ejs'));
    },

    home: (req, res) => {
        res.render(path.resolve(__dirname, '...', '/views/home.ejs'));
    },

    buscarProducto: (req, res) => {
        res.reender(path.resolve(__dirname, '...', '/views/reserve.ejs'));
    },
}

module.['exports'] = controlador;