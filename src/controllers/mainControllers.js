/****************************COMENTARIOS CONTROLLER ******************/

//res.render --> ENVIA PAGINA RENDERIZADA
const controller = {
  index: (req, res) => {
      res.render("index");
    },
    home: (req, res) => {
        res.render("home");
    },
    contacto: (req, res) => {
        res.send("contacto en construccion");
    },
    locales: (req, res) => {
        res.send("newFront")
    },
    buscar: (req, res) => {
        res.render("buscar");
    },
    buscarProducto: (req, res) => {
        res.render("buscar");
    },
    detalleProducto: (req, res) => {
        res.render("detalleProducto");
    },
    detallesProducto: (req, res) => {
        res.render("detallesProducto")
    },

    cadastroUsuario: (req, res) => {
        res.render("cadastroUsuarios")
    },
    loginEmpresa: (req, res) => {
        res.send("loginEmpresa en construccion")
    },

    reservas: (req, res) => {
        res.render("reservas")
    },
    tablePath: (req, res) => {
        res.render("tablePath")
    },
    empresa: (req , res ) => {
        res.send("empresa pagina construccion")
    }
};

module.exports = controller;