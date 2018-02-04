var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormIncusaoNoticia = require('./app/routes/form_add_noticia')(app);

app.listen(3000, (req, res) => {
    console.log('Server ON');
});