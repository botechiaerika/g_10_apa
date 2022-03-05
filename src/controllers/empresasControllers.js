const icons = {

}


const controller = {
    homeEmpresa: (req, res) => {
        res.render('newFront')
    },
    cadastroEmpresa: (req, res) => {
        res.render("cadastroEmpresa");
    },
};

module.exports = controller;