/* las funciones son objetos de primera clase, esto quiere decir
que las funciones pueden ser asignadas a otras variables, 
pasadas como argumentos a otras funciones o retornadas de otras
funciones y tambien tienen propiedas */

function Usuario(nombre) {
    this.nombre = nombre;
}


console.log(Usuario.name); //devuelve el nombre de la funcion
console.log(Usuario.length); //devuelve la cantidad de argumentos que recibe

//asignar la funcion a una variable
const U = Usuario
let user = new U('Nicolas');
console.log(user);

//pasar las funciones como argumentos
function of(Fn, arg) {
    return new Fn(arg);
}
let user1= of(Usuario, 'Carlos');
console.log(user1);

//retornar dentro de otras funciones
function returned() {
    return function () {
        console.log('Hola Mundo');
    }
}
let saludo = returned();
saludo();