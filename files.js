var fs = require('fs');
fs.readFile('texto.txt',function(erro, retorno){
    var log = retorno.toString();
    var linhas = log.split('\n');
    
    for (var i in linhas){
        console.log("--------------------");
        var partes = linhas[i].split(' ');
        console.log("DATA: "+partes[0]);
        console.log("TIPO: "+partes[1]);
        console.log("MSG: "+partes[2]);
    }
    
    
});