module.exports = (app) => {
    
    app.get('/noticia', (req, res) => {
        var connection = app.config.dbConnection();
            
        connection.query('select * from noticias where id_noticia = 2', (erro, result) => {
            res.render('noticias/noticia', {noticia : result});
        });
    });
};