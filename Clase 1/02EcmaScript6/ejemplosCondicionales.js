let mensaje = "";
let edad = 25;

if(edad <21){
    mensaje = "Es menor de edad";
}else{
    mensaje = "Es mayor de edad";
}

console.log(mensaje);

let estado = "triste";
let personaje = estado == "enojado" ? "Hulk" : "Banner";
console.log(personaje);

let encadenado = estado == "enojado" ? "Hulk" : estado == "triste" ? "Banner Triste" : "Banner";
console.log(encadenado);