var peterParker = "Peter Parker";
if(true){
    var peterParker = "Hombre Araña";
}
console.log(peterParker);
var peterParker = "Hombre Araña";
console.log(peterParker);

let brunoDiaz = "Bruno Diaz";
if(true){
    let brunoDiaz = "Batman";
}
console.log(brunoDiaz);
//let brunoDiaz = "Batman"; //SyntaxError: No puedo utilizar el mismo nombre

function haceAlgo(){
    console.log(variableUno);
    //console.log(variableDos); //La variable no esta definida

    var variableUno = 10;
    let variableDos = 20;
}

haceAlgo();

switch (x) {
    case 0:
    let foo;
    break;
    case 1:
    //let foo; // Terminamos con un error de tipo SyntaxError.
            // esto debido a la redeclaracion
    break;
    }
    