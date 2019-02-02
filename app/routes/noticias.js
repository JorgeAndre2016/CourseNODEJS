// var dbConnection = require('../../config/dbConnections');

module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        var connection = application.config.dbConnections();
        var noticiasModel = application.app.models.noticiasModel; // acessando modulo

        noticiasModel.getNoticias(connection, function (erro, result) {
            res.render('noticias/noticias', { noticias: result })
        });

        connection.end(function(err) { console.log('Conexão com bd foi encerrada'); })
    });
}