var express = require('express'); // import library express
var app = express(); // excutando função que modulo retorna

app.get('/', function(req, res) {
    res.send('<html><body>Portal de Noticias</body></html>')
});

app.get('/tecnologia', function(req, res) {
    res.send('<html><body>Noticias de tecnologia</body></html>')
});

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
    
});
