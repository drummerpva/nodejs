var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("Teste de servidor com nodeJS!");
}).listen(3000);
console.log("Servidor rodando na porta 8080");
