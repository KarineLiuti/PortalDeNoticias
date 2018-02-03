var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('secao/tecnologia');
});

app.get('/tecnologia', (req, res) => {
    res.send('<html><body><h1>Noticias sobre tecnologia</h1></body></html>');
});

app.listen(3000, (req, res) => {
    console.log('Servidor rodando com Express');
});