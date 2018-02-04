var mysql = require('mysql');

var connMySQL = () => {
    console.log('Conexão com o BD estabelecida.');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = () => {
    console.log('O autoload carregou o módulo de conexão com o BD');
    return connMySQL;
};        