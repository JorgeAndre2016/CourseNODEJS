module.exports = function () {

    this.getNoticias = function(connection, callback){
        {/* 2 parâmetros do método query
            sql - consulta em si, 
            função de callback - é o que será feito após a consulta ser realizada */}
            connection.query('select * from noticias', callback);
    }

    this.getNoticia = function(connection, callback) {
        connection.query('select * from noticias where id_noticia = 3', callback);
    }

    this.salvarNoticias = function(noticia, connection, callback) {
        connection.query('insert into noticias set ?', noticia, callback);
    }

    return this;
}