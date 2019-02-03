module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia')
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body; // express só preenche se estiver inserido o módulo body-parser
        
        var connection = application.config.dbConnections();
        var noticiasModel = application.app.models.noticiasModel; // acessando modulo

        noticiasModel.salvarNoticias(noticia, connection, function (erro, result) {
            res.redirect('/noticias')
        });

        connection.end(function(err) { console.log('Conexão com bd foi encerrada'); })
    });
}
