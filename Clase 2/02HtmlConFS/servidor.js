const http = require('http');
const fs = require('fs');
const contentTypes = require('./modulos/contenttype');


const marvelApp = http.createServer((request,response) => {
    switch(request.url){
        case "/":
        case "/index.html":
            fs.readFile("estatico/index.html", "UTF-8", (err,datos) => {
                response.writeHead(200,contentTypes.cthtml);
                response.end(datos);
            });            
        break;
        case "/ironman.html":
            fs.readFile("estatico/ironman.html", "UTF-8", (err,datos) => {
                response.writeHead(200,contentTypes.cthtml);
                response.end(datos);
            });  
        break;
        case "/avengers.html":
        fs.readFile("estatico/avengers.html", "UTF-8", (err,datos) => {
            response.writeHead(200,contentTypes.cthtml);
            response.end(datos);
        });  
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