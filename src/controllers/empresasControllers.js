const controller = {
    homeEmpresa: (req, res) => {
        res.render('landingEmpresa')
    },
    cadastroEmpresas: (req, res) => {
        res.render("empresa/cadastroEmpresa");
    },
    loginEmpresa: (req, res) => {
        res.render("empresa/loginEmpresa");
    },
    managerAccount: (req, res) => {
        res.render("empresa/manager");
    },
    bossAccount: (req, res) => {
        res.render("empresa/boss");
    }
};

module.exports = controller;