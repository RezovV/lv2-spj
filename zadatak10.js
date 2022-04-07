var http = require("http");
var nPort = 8000;
var randm = require("./slucajanBroj.js");

console.log("Pokretanje servera na portu" + nPort);
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})

    for(i = 1;i <= 10; i++)
    {
        var broj = String(randm.dajSlucajanBroj(10,100)+ "\n");
        response.write(broj);
    }
    response.end();
}).listen(nPort);