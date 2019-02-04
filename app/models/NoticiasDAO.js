function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    {/* 2 parâmetros do método query
        sql - consulta em si, 
        função de callback - é o que será feito após a consulta ser realizada */}
        this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id_noticia = 17', callback);
}

NoticiasDAO.prototype.salvarNoticias = function(noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}


module.exports = function () {
    return NoticiasDAO;
}