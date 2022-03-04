const mainRouter = require('/routes/mainRoutes/router')
const controller = {
    index: (req, res) => {
        res.render('index')
    },

    home: (req, res) => {
        res.render('home')
    },

    search: (req, res) => {
        res.render('buscarProducto')
    }
}

module.exports = controller