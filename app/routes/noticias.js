module.exports = (app) => {
    
    app.get('/noticias', (req, res) => {
        var connection = app.config.dbConnection();
            
        connection.query('select * from noticias', (erro, result) => {
            res.render('noticias/noticias', {noticias : result});
        });
    });
};