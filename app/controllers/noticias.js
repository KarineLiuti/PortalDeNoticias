module.exports.noticias = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias((erro, result) => {
        res.render('noticias/noticias', {noticias : result});
    });
};

module.exports.noticia = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, (erro, result) => {
        res.render('noticias/noticia', {noticias : result});
    });
};