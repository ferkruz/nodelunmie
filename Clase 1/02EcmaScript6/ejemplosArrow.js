function haceAlgo(){
    console.log("Conquisto el mundo");
}

haceAlgo();

var respuesta = () => "No quiero hacer nada";

console.log(respuesta());

var sumar = (a,b) => a + b;

var resultado = sumar(10,20);
console.log(resultado);

var cuadradoNumero = a => a*a;

var resultadoCuadrado = cuadradoNumero(2);
console.log(resultadoCuadrado);


var saludaYSuma = (nombre,a,b) => {
    console.log("Hola "+nombre + " Hora del break");
    return a+b;
};

console.log(saludaYSuma("Andres",1,1));