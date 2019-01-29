var express = require('express'); // import library express

var app = express(); // excutando função que modulo retorna

app.set('view engine', 'ejs'); // engine de view do express agora é o EJS
app.set('views', './app/views'); // definindo diretório das views

module.exports = app;