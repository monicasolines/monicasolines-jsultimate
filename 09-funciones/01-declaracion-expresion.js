console.log(resta); //expresion: hoisting >> esta da error
console.log(suma); //declaracion: esta me muestra la funcion correctamente



//declaracion de funciones:
//funcion nombrada
function suma () {
    console.log("sumando..");
    
}
//funcion anonima(se usa dentro de metodos como map)
// function () {
//     console.log("funcion anonima");  
// }




// expresion de funciones>> funcion expression
//expresion de funcion anonima 
let resta = function () {
    console.log("restando");   
}
//named function expression
let mutiplica = function multi () {
    console.log("multiplicando");
    
}
// expresion de funcion con arrow function
//siempre sera anonima y se le puede asignar a una variable
const divide = () => {
    console.log("dividiendo");
    
}
