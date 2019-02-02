module.exports = function(app) {

    app.get('/noticia', function (req, res) {
        
        var connection = app.config.dbConnections();
        {/* 2 parâmetros do método query
            sql - consulta em si, 
            função de callback - é o que será feito após a consulta ser realizada */}
        connection.query('select * from noticias where id_noticia = 3', function (erro, result) {
            res.render('noticias/noticia', { noticia: result });
        });

    });
}