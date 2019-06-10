const http = require('http');
const fs = require('fs');

const contentTypes = require('./modulos/contenttype');

const index = require('./modulos/index');
const ironman = require("./modulos/ironman");
const avengers = require("./modulos/avengers");


const marvelApp = http.createServer((request,response) => {
    switch(request.url){
        case "/":
        case "/index.html":
            response.writeHead(200,contentTypes.cthtml);
            response.end(index);
        break;
        case "/ironman.html":
            response.writeHead(200,contentTypes.cthtml);
            response.end(ironman);
        break;
        case "/avengers.html":
            response.writeHead(200,contentTypes.cthtml);
            response.end(avengers);
        break;
        case "/Marvel_Cinematic_Universe_logo.png":
            
            fs.readFile("Marvel_Cinematic_Universe_logo.png",(err,datos) => {
                if(!err){
                    response.writeHead(200,contentTypes.png);
                    response.end(datos);
                }else{
                    response.writeHead(404,contentTypes.cthtml);
                    response.end(err);
                }
            });
        break;
    }
});

marvelApp.listen(5000);