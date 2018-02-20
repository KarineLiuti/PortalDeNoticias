module.exports.index = (application, req, res) => {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.get5UltimasNoticias = (error, result) => {
        console.log(result);
        res.render('home/index');
    }

}