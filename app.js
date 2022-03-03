const express = require('express')
const path = require('path')
const app = express();

app.set("view engine", "ejs");


app.set(express.static(path.resolve(__dirname, "/public/")));
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/home", (req, res) => {
    res.render("home");
});
app.get("/login", (req, res) => {
    res.render("loginUsuario");
});
app.get("/cadastroEmpresa", (req, res) => {
    res.render("cadastroEmpresa");
});
app.get("/cadastroUsuarios", (req, res) => {
    res.render("cadastroUsuarios");
});
app.get("/reservas", (req, res) => {
    res.render("reservas");
});

app.get("/detallesProducto", (req, res) => {
    res.render("detallesProducto");
});
// app.get("/producto/apaBusqueda", (req, res) => {
//     res.render("buscarProducto");
// });

app.listen(process.env.PORT || 9797, () => {
    console.log("Servidor levantado CORRIENDO en  9797");
});

/*CON ROUTERS

const productsRoutes = require('./routes/productsRoutes');

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', '/routes')

app.use('*', function(req, res) {
    res.send("pagina NO encontrada ");
});

app.listen(3030, () => {
    console.log("Servidor RODANDO PORT 3030");
});*/