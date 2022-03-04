const express = require('express')
const path = require('path')
const app = express();

app.set("view engine", "ejs")

app.set(express.static(path.resolve(__dirname, "/public")));
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

app.get("/buscarProducto", (req, res) => {
    res.render("buscarProducto");
});

app.get("/detalleProducto", (req, res) => {
    res.render("detalleProducto");
});


app.get("/detallesProducto", (req, res) => {
    res.render("detallesProducto");
});
app.listen(process.env.PORT || 9797, () => {
    console.log("Servidor levantado CORRIENDO en  9797");
});

/*# APP

## 1) IMPORTAR TODOS RUTEADORES de TODAS COLECCIONES

```js
const mainRoutes = require("./src/routes/mainRouters");
const productosRoutes = require("./src/routes/productosRouters");
const localesRoutes = require("./src/routes/localesRouters");
const usuariosRoutes = require("./src/routes/usuariosRouters");
const admRoutes = require("./src/routes/empresaRouters");
const reservasRoutes = require("./src/routes/reservasRouters");
const journeyApaRoutes = reequire("./src/routes/journeyApaRouters");
```

## 2) INSTANCIAR EXPRESS + LIBRERIA RES y PATH

```js
const express = require("express");
const path = require("path");
const res = require("express/lib/response");
const app = express();
```

## 3) LLAMAR RUTAS A SEREN USADAS

```js
app.use("/", mainRouters);
app.use("/productos", productosRouters);
app.use("/locales", localesRouters);
app.use("/usuarios", usuariosRouters);
app.use("/empresas", empresasRouters);
app.use("/reservas", reservasRouters);
app.use("/journeyApa", journeyApaRouters);
```

## 4) PUBLIC PUBLICO VIEW ENGINE USA EEJS y \* ERROR

```js
app.use(express.static(path.resolve(__dirname, "./public")));
app.set("view engine", "ejs");
app.listen(process.env.PORT || 9797, () => {
  console.log("CORRIENDO PORT 9797");
});
```
*/