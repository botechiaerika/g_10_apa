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
        res.render("newFront")
    },
     buscar: (req, res) => {
        res.render("buscar");
    },
      buscarProducto: (req, res) => {
        res.render("buscarProducto");
    },
    detalleProducto: (req, res) =>{
        res.render("detalleProducto");
    },
    detallesProducto: (req, res)=>{
        res.render("detallesProducto")
    },
    loginUsuario: (req, res)=>{
        res.render("loginUsuario")
    },
    loginEmpresa: (req, res)=> {
        res.send("loginEmpresa en construccion")
    },
    miCuenta: (req, res) => {
        res.render("miCuenta")
    },
    reservas: (req , res ) => {
        res.render("reservas")
    },
      tablePath: (req , res ) => {
        res.render("tablePath")
    },
        empresa: (req , res ) => {
        res.send("empresa pagina construccion")
    }
};

module.exports = controller;