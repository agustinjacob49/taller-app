const router = require('express').Router();

//Aclaracion , venta es porque es una tarea, nada mas.
//ventas es un arreglo de tareas. Nada mas sencillo
//Cada tarea es un objeto
//Podria decirse que mongoDB guarda un array de objetos de tipo tarea o lo que
//Se me cante la chota.


//Iniciar mongoDB

const mongojs = require('mongojs');

//Nombre de la db
const db = mongojs('mean-db', ['ventas']);

router.get('/ventas', (req, res, next) => {
    db.ventas.find((err, ventas) => {
        if (err) return next(err);
        res.json(ventas);
    });
});


// Single Task
router.get('/ventas/:id', (req, res, next) => {
    db.ventas.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});



//CRUD

router.post('/ventas', (req, res, next) => {
    const venta = req.body;
    //Validaciones desde backend
    var f = new Date();

    venta.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();


    db.ventas.save(venta, (err, venta) => {
        if (err) return next(err);
        res.json(venta);
    });
});

router.delete('/ventas/:id', (req, res, next) => {
    db.ventas.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});


router.put('/ventas/:id', (req, res, next) => {
    //validaciones

    const venta = req.body;
    const updateventa = {};

    if (venta.nombre) {
        updateventa.nombre = venta.nombre;
    }
    if (venta.apellido) {
        updateventa.apellido = venta.apellido;
    }
    if (venta.direccion) {
        updateventa.direccion = venta.direccion;
    }
    if (venta.email) {
        updateventa.email = venta.email;
    }
    if (venta.telefono) {
        updateventa.telefono = venta.telefono;
    }
    if (venta.vehiculo) {
        updateventa.vehiculo = venta.vehiculo;
    }

    var f = new Date();

    updateventa.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();
    if (!updateventa) {
        res.status(400).json({
            error: 'Bad request'
        });
    } else {
        db.ventas.update({ _id: mongojs.ObjectId(req.params.id) }, updateventa, {}, (err, task) => {
            if (err) return next(err);
            res.json(task);
        });
    }


});



module.exports = router;