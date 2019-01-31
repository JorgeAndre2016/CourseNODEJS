module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'adminroot',
            database: 'portal_noticias'
        });

        {/* 2 parâmetros do método query
            sql - consulta em si, 
            função de callback - é o que será feito após a consulta ser realizada */}
        connection.query('select * from noticias', function (erro, result) {
            res.render('noticias/noticias', { noticias: result });
        });

    });
}