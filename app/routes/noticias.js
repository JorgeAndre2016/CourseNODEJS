// var dbConnection = require('../../config/dbConnections');

module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        var connection = application.config.dbConnections();
        var noticiaDao = new application.app.models.NoticiasDAO(connection); // acessando modulo

        noticiaDao.getNoticias(function (erro, result) {
            res.render('noticias/noticias', { noticias: result })
        });

        connection.end(function(err) { console.log('Conexão com bd foi encerrada'); })
    });
}