module.exports = function (application) {

    application.get('/noticia', function (req, res) {

        var connection = application.config.dbConnections();
        var noticiaDao = application.app.models.NoticiasDAO;

        noticiaDao.getNoticia(connection, function (erro, result) {
            res.render('noticias/noticia', { noticia: result });
        });

        connection.end(function(err) { console.log('Conexão com bd foi encerrada'); })
    });
};