const moduloHTTP = require("http");
const moduloIndex = require("./index");

var server = moduloHTTP.createServer((request,response) => {
    console.log(request.url);

    switch(request.url){
        case "/":
        case "/index.html":
            response.writeHead(200,{"content-type":"text/html"});
            response.end(moduloIndex);
            break;
        case "/pagina2.html":
            response.writeHead(200,{"content-type":"text/html"});
            response.end('<a href="/index.html">Ir al index</a>');
            break;
        default:
            response.writeHead(404,{"content-type":"text/html"});
            response.end('No se encontro el elemento');
            break;
    }
});

server.listen(4000);