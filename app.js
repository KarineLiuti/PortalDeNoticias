var app = require('./config/server');

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home/index');
});

app.get('/admin', (req, res) => {
    res.render('admin/form_add_noticia');
});

app.get('/noticias', (req, res) => {
    res.render('noticias/noticias');
});

app.listen(3000, (req, res) => {
    console.log('Server ON');
});