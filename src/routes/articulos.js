const router = require('express').Router();

//Aclaracion , articulo es porque es una tarea, nada mas.
//articulos es un arreglo de tareas. Nada mas sencillo
//Cada tarea es un objeto
//Podria decirse que mongoDB guarda un array de objetos de tipo tarea o lo que
//Se me cante la chota.


//Iniciar mongoDB

const mongojs = require('mongojs');

//Nombre de la db
const db = mongojs('mean-db', ['articulos']);

router.get('/articulos', (req, res, next) => {
    db.articulos.find((err, articulos) => {
        if (err) return next(err);
        res.json(articulos);
    });
});


// Single Task
router.get('/articulos/:id', (req, res, next) => {
    db.articulos.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});


//CRUD

router.post('/articulos', (req, res, next) => {
    const articulo = req.body;
    //Validaciones desde backend
    var f = new Date();

    articulo.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();


    db.articulos.save(articulo, (err, articulo) => {
        if (err) return next(err);
        res.json(articulo);
    });
});

router.delete('/articulos/:id', (req, res, next) => {
    db.articulos.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});


router.put('/articulos/:id', (req, res, next) => {
    //validaciones

    const articulo = req.body;
    const updatearticulo = {};

    if (articulo.titulo) {
        updatearticulo.titulo = articulo.titulo;
    }
    if (articulo.precio) {
        updatearticulo.precio = articulo.precio;
    }
    if (articulo.marca) {
        updatearticulo.marca = articulo.marca;
    }
    if (articulo.cantidad) {
        updatearticulo.cantidad = articulo.cantidad;
    }
    if (articulo.descripcion) {
        updatearticulo.descripcion = articulo.descripcion;
    }
    if (articulo.precioMayorista) {
        updatearticulo.precioMayorista = articulo.precioMayorista;
    }
    if (articulo.gananciaPorcentaje) {
        updatearticulo.gananciaPorcentaje = articulo.gananciaPorcentaje;
    }

    var f = new Date();

    updatearticulo.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();
    if (!updatearticulo) {
        res.status(400).json({
            error: 'Bad request'
        });
    } else {
        db.articulos.update({ _id: mongojs.ObjectId(req.params.id) }, updatearticulo, {}, (err, task) => {
            if (err) return next(err);
            res.json(task);
        });
    }


});



module.exports = router;