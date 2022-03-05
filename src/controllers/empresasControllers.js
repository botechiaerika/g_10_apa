const controller = {
    homeEmpresa: (req, res) => {
        res.send("PAGINA EN CONSTRUCCION");
    },
    cadastroEmpresa: (req, res) => {
        res.render("cadastroEmpresa");
    },
};

module.exports = controller;