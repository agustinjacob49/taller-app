const router = require('express').Router();

//Aclaracion , cliente es porque es una tarea, nada mas.
//clientes es un arreglo de tareas. Nada mas sencillo
//Cada tarea es un objeto
//Podria decirse que mongoDB guarda un array de objetos de tipo tarea o lo que



//Iniciar mongoDB

const mongojs = require('mongojs');

//Nombre de la db
const db = mongojs('mean-db', ['clientes']);

router.get('/clientes', (req, res, next) => {
    db.clientes.find((err, clientes) => {
        if (err) return next(err);
        res.json(clientes);
    });
});


// Single Task
router.get('/clientes/:id', (req, res, next) => {
    db.clientes.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});


//CRUD

router.post('/clientes', (req, res, next) => {
    const cliente = req.body;
    //Validaciones desde backend
    var f = new Date();

    cliente.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();


    db.clientes.save(cliente, (err, cliente) => {
        if (err) return next(err);
        res.json(cliente);
    });
});

router.delete('/clientes/:id', (req, res, next) => {
    db.clientes.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, task) => {
        if (err) { res.send(err); }
        res.json(task);
    });
});


router.put('/clientes/:id', (req, res, next) => {
    //validaciones

    const cliente = req.body;
    const updatecliente = {};

    if (cliente.nombre) {
        updatecliente.nombre = cliente.nombre;
    }
    if (cliente.apellido) {
        updatecliente.apellido = cliente.apellido;
    }
    if (cliente.direccion) {
        updatecliente.direccion = cliente.direccion;
    }
    if (cliente.email) {
        updatecliente.email = cliente.email;
    }
    if (cliente.telefono) {
        updatecliente.telefono = cliente.telefono;
    }
    if (cliente.vehiculo) {
        updatecliente.vehiculo = cliente.vehiculo;
    }

    var f = new Date();

    updatecliente.fechaActualizacion = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + ' ' + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds();
    if (!updatecliente) {
        res.status(400).json({
            error: 'Bad request'
        });
    } else {
        db.clientes.update({ _id: mongojs.ObjectId(req.params.id) }, updatecliente, {}, (err, task) => {
            if (err) return next(err);
            res.json(task);
        });
    }


});



module.exports = router;