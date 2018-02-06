module.exports = (application) => {
    
    application.get('/noticias', (req, res) => {
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, (erro, result) => {
            res.render('noticias/noticias', {noticias : result});
        });
    });
};