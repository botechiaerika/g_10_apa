// ************ Require's ************
const express = require('express');
const path = require('path');


// ************ express() - (don't touch) ************
const app = express();


// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRouters.js');
const usuariosRouter = require('./routes/usuariosRouters.js');
const productosRouter = require('./routes/productosRouters.js');
const empresasRouter = require('./routes/empresasRouters.js')

app.use('/', mainRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos' , productosRouter);
app.use('/empresas', empresasRouter);
app.use('/locales' , productosRouter);



app.use(express.static(path.join(__dirname,'./../public')));

app.listen(process.env.PORT || 9797, () => {
    console.log("CORRIENDO PORT 9797");
});
module.exports