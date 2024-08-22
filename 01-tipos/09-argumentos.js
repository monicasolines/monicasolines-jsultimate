

/* cuando referenciamos
los valores dentro de las funciones se llaman parametros.
las funciones pueden recibir varios argumentos y parametros*/ 

function suma(a, b) {
    console.log(arguments);
    return a + b;
}
/* arguments me permite acceder a todos los valores
 que se estan pasando a la funcion.
 sin embargo no es la forma recomendada de hacerlo */

/*argumento es el valor que pasamos a la funcion, en este caso 5
*/
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);

