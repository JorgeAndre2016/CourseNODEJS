module.exports.index = function(application, req, res) {
    var connection = application.config.dbConnections();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.get5UltimasNoticias(function(error, result) { 
        res.render("home/index", {noticias: result});
    });
}