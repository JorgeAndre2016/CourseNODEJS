var express = require('express'); // import library express
var consign = require('consign'); // import library consign

var app = express(); // excutando função que modulo retorna
app.set('view engine', 'ejs'); // engine de view do express agora é o EJS
app.set('views', './app/views'); // definindo diretório das views

consign().include('app/routes').into(app); // consign reconhece todos arquivos da pasta routes (faz um scan)
                                      // pega estes módulos e inclui dentro do servidor
module.exports = app;