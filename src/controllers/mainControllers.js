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
    loginEmpresa: (req, res) => {
        res.send("loginEmpresa en construccion")
    },
    tablePath: (req, res) => {
        res.render("tablePath")
    },
    empresa: (req , res ) => {
        res.send("empresa pagina construccion")
    }
};

module.exports = controller;