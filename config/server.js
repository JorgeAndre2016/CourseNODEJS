var express = require('express'); // import library express
var consign = require('consign'); // import library consign
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); // excutando função que modulo retorna
app.set('view engine', 'ejs'); // engine de view do express agora é o EJS
app.set('views', './app/views'); // definindo diretório das views

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator()); // inserindo middleware na aplicação
consign()
    .include('app/routes') // consign reconhece todos arquivos da pasta routes (faz um scan)
    .then('config/dbConnections.js')
    .then('app/models')
    .into(app);            // pega estes módulos e inclui dentro do servidor

module.exports = app;