function NoticiasDAO(connection) {

  this._connection = connection;

  NoticiasDAO.prototype.getNoticias = (callback)  => {
    this._connection.query('select * from noticias order by data_noticia desc', callback);
  }

  NoticiasDAO.prototype.getNoticia = (id_noticia, callback)  => {
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
  }

  NoticiasDAO.prototype.salvarNoticia = (noticia, callback) => {
    console.log(noticia);
    this._connection.query('insert into noticias set ?', noticia, callback);
  }

  NoticiasDAO.prototype.get5UltimasNoticias = (callback) => {
    console.log('entrei na funcao');
    this._connection.query('select * from noticias order by data_noticia desc limit 5', callback);
  };

}

module.exports = () => {
  return NoticiasDAO;
};