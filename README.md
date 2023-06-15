const bodyParser = require('body-parser');
const env = require('dotenv').config();
const models = require('./models');
// Routers
const router = require('./app/routes');
const express = require('express');
const app = express();

app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

// Sync Database
models.sequelize
    .sync()
    .then(function () {
        console.log('Banco de dados Conectado');

        app.listen(process.env.PORT, function (err) {
            if (!err) console.log('Listening on ' + process.env.PORT);
            else console.log(err);
        });
    })
    .catch(function (err) {
        console.log(err, 'Erro de sincronização com Banco de Dados. Please try again!');
    });
