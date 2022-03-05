// ************ Require's ************

const express = require('express');

const path = require('path');


// ************ express() - (don't touch) ************
const app = express();
app.use(express.static(path.join(__dirname, '../public')));

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRouters.js');
const empresasRouter = require('./routes/empresasRouters.js')
    // const localesRouter = require('./routes/localesRouters.js');
    // const productosRouters = require('./routes/productosRouters.js');
    // const reservasRouter = require('./routes/reservasRouters.js')
    // const usuariosRouters = require('./routes/usuariosRouters.js')


app.use('/', mainRouter);
app.use('/empresas', empresasRouter);
// app.use('/locales', localesRouter);
// app.use('/productos', productosRouters);
// app.use('/reservas', reservasRouter);
// app.use('/usuarios', usuariosRouters);



app.listen(process.env.PORT || 9797, () => {
    console.log("CORRIENDO PORT 9797");
});
module.exports = app;