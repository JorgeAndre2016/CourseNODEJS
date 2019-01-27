var http = require('http'); // import library http

var server = http.createServer(function (req, res) {
    var categoria = req.url;
    
    if (categoria == "/tecnologia") {
        res.end("<html><body>Portal de tecnologia</body></html>");
    }
    else if (categoria == "/moda") {
        res.end("<html><body>Portal de moda</body></html>");
    }
    else if (categoria == "/beleza") {
        res.end("<html><body>Portal de beleza</body></html>");
    } 
    else {
        res.end("<html><body>Portal de Noticias</body></html>");
    }

});

server.listen(3000); // escutar/verificar o que esta sendo requisitado na porta