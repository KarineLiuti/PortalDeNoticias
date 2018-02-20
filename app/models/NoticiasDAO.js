function NoticiasDAO(connection) {

  this._connection = connection;

  NoticiasDAO.prototype.getNoticias = (callback)  => {
    this._connection.query('select * from noticias', callback);
  }

  NoticiasDAO.prototype.getNoticia = (callback)  => {
    this._connection.query('select * from noticias where id_noticia = 2', callback);
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