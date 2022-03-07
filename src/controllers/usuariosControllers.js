/****************************COMENTARIOS CONTROLLER ******************/

//res.render --> ENVIA PAGINA RENDERIZADA
const controller = {
    register: (req, res) => {
        res.render('cadastroUsuarios')
    },
    miCuenta: (req, res) => {
        res.render('usuarios/account')
    },
    iniciarSeccion: (req, res) => {
        res.render('usuarios/loginUsuario')
    }
}

module.exports = controller;