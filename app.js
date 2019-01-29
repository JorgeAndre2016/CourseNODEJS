var express = require('express'); // import library express
var msg = require('./mod_teste');

var app = express(); // excutando função que modulo retorna

app.set('view engine', 'ejs'); // engine de view do express agora é o EJS

app.get('/', function(req, res) {
    res.render('home/index')
});

app.get('/formulario_inclusao_noticia', function(req, res) {
    res.render('admin/form_add_noticia')
});

app.get('/noticias', function(req, res) {
    res.render('noticias/noticias')
});

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
    console.log(msg());
});
