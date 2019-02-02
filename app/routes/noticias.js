// var dbConnection = require('../../config/dbConnections');

module.exports = function(app) {

    app.get('/noticias', function (req, res) {
        
        var connection = app.config.dbConnections();
        {/* 2 parâmetros do método query
            sql - consulta em si, 
            função de callback - é o que será feito após a consulta ser realizada */}
        connection.query('select * from noticias', function (erro, result) {
            res.render('noticias/noticias', { noticias: result });
        });

    });
}