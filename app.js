var app = require('./config/server');
// var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function() {
    console.log("Servidor rodando com Express");
});
