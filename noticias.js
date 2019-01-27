var http = require('http'); // import library http

var server = http.createServer( function(req, res) {
    res.end("<html><body>Resposta server new</body></html>");
});

server.listen(3000); // escutar/verificar o que esta sendo requisitado na porta