const jsono = require("./osobe.json");
var http = require("http");
var nPort = 8000;

console.log("Pokretanje servera na portu" + nPort);
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
    jsono.forEach(element => {
        if(element.index == null)
        {
            response.write("index: nema vrijednosti");
        }
        else
        {
            response.write("index: "+element.index+" ");
        }
        if(element.age == null)
        {
            response.write("index: nema vrijednosti");
        }
        else
        {
            response.write("index: "+element.age+" ");
        }
        if(element.name == null)
        {
            response.write("index: nema vrijednosti");
        }
        else
        {
            response.write("index: "+element.name+" ");
        }
        if(element.company == null)
        {
            response.write("index: nema vrijednosti");
        }
        else
        {
            response.write("index: "+element.company+" ");
        }
        response.write("\n")
    });
    response.end();
}).listen(nPort);