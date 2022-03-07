const controller = {
    productosHome: (req, res) => {
        res.render("home");
    },
    buscarProducto: (req, res) =>{
    res.render("productos/buscar")
    },
    buscar01: (req, res) =>{
        res.render("productos/buscarP")
    },
    buscar02: (req, res) =>{
        res.render("productos/buscarProducto")
    },
   detalles01: (req , res) =>{
        res.render("productos/detalleProducto")},
    detalles02: (req, res) =>{
        res.render("productos/detallesProducto")
    },
    reserve: (req, res) =>{
        res.render("productos/reservas")
    }
}
module.exports = controller;