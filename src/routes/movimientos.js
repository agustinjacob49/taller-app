const router = require('express').Router();

//Aclaracion ,movimiento es porque es una tarea, nada mas.
//movimientos es un arreglo de tareas. Nada mas sencillo
//Cada tarea es un objeto
//Podria decirse que mongoDB guarda un array de objetos de tipo tarea o lo que
//Se me cante la chota.


//Iniciar mongoDB

const mongojs = require('mongojs');

//Nombre de la db
const db = mongojs('mean-db', ['movimientos']);

router.get('/movimientos', (req, res, next) => {
    db.movimientos.find((err, movimientos) => {
        if (err) return next(err);
        res.json(movimientos);
    });
});


// Single Task
router.get('/movimientos/:id', (req, res, next) => {
    db.movimientos.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});


//CRUD

router.post('/movimientos', (req, res, next) => {
    constmovimiento = req.body;
    //Validaciones desde backend
    var f = new Date();

    constmovimiento.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();


    db.movimientos.save(constmovimiento, (err, movimiento) => {
        if (err) return next(err);
        res.json(movimiento);
    });
});

router.delete('/movimientos/:id', (req, res, next) => {
    db.movimientos.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});


router.put('/movimientos/:id', (req, res, next) => {
    //validaciones

    const movimiento = req.body;
    const updatemovimiento = {};


    var f = new Date();

    updatemovimiento.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();
    if (!updatemovimiento) {
        res.status(400).json({
            error: 'Bad request'
        });
    } else {
        db.movimientos.update({ _id: mongojs.ObjectId(req.params.id) }, updatemovimiento, {}, (err, task) => {
            if (err) return next(err);
            res.json(task);
        });
    }


});



module.exports = router;