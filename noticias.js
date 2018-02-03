var http = require('http');

var server = http.createServer((req, res)  => {
    res.end('<html><body><h1>Painel de notícias</h1></body></html>')
});

  server.listen(3000);