const cors = require('cors');
const express = require('express');
const app = express();
const clientsRoutes = require('./routes/clientes');
const articulosRoutes = require('./routes/articulos');
const ventasRoutes = require('./routes/ventas');
const movimientosRoutes = require('./routes/movimientos');
const path = require('path');

//Settings

//DEFINICION DE PUERTO. 
//SI EXISTE UN PUERTO DEFINIDO POR EL SO, USALO SINO USA EL 3000
app.set('port', process.env.PORT || 3000);

//EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//MIDLLEWARES - FUNCIONES QUE SE EJECUTAN ANTES DE RECIBIR LA INFORMACION
//QUE ME ENVIA EL NAVEGADOR

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Routes
///app.use(indexRoutes);
app.use('/api', clientsRoutes);
app.use('/api', articulosRoutes);
app.use('/api', ventasRoutes);
app.use('/api', movimientosRoutes);

//Vistas
app.set('views', path.join(__dirname, 'views'));


//Static files
//ACA SE COLOCA EL DIST
app.use(express.static(path.join(__dirname, 'dist/client')));
app.use(express.static(path.join(__dirname, 'dist/articulo')));
app.use(express.static(path.join(__dirname, 'dist/venta')));
app.use(express.static(path.join(__dirname, 'dist/movimiento')));

app.use(express.static(path.join(__dirname, 'dist')));


//Start server



app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});