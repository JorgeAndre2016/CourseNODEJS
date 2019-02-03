module.exports = function (application) {
    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia')
    });

    application.post('/noticias/salvar', function (req, res) {
        var noticia = req.body; // express só preenche se estiver inserido o módulo body-parser
        
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty();
        // req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-mm-dd'});
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();
        
        if(erros){
            res.render('admin/form_add_noticia', {validacao: erros})
            return;
        }

        var connection = application.config.dbConnections();
        var noticiaDao = new application.app.models.NoticiasDAO(connection); // acessando modulo

        noticiaDao.salvarNoticias(noticia, function (erro, result) {
            res.redirect('/noticias')
        });

        connection.end(function(err) { console.log('Conexão com bd foi encerrada'); })
    });
}
