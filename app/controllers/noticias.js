module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnections();
    var noticiaDao = new application.app.models.NoticiasDAO(connection); // acessando modulo

    noticiaDao.getNoticias(function (erro, result) {
        res.render('noticias/noticias', { noticias: result })
    });

    connection.end(function (err) { console.log('Conexão com bd foi encerrada'); })
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnections();
    var noticiaDao = new application.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;

    noticiaDao.getNoticia(id_noticia, function (erro, result) {
        res.render('noticias/noticia', { noticia: result });
    });

    connection.end(function (err) { console.log('Conexão com bd foi encerrada'); })
}