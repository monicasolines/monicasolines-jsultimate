/* arrays tambien se puede llamar arreglo, 
que viene de coleccion
*/

/*esto de abajo es un array literal, y puedo 
definirlo vacio o agregar contenido al momento de la creacion
*/
let animales = ['chanchito', 'caballo'];

/* los arraays respetan el orden en el que pasas*/
/*los elementos de un array empiezan en el elemento 0*/ 

/* con el console pasaas el listado de tu array, en este caso
le paso mi array de animales */
console.log(animales);
console.log(animales[0]);

animales[2] = 'dragon';
console.log(animales);

animales[10]= 'Pez';
console.log(animales[7]);

console.log(typeof animales);
/*los arrays dentro de javascript se comportan como objetos, 
entonces podemos tratar de acceder a las propiedades de ellos
*/


console.log(animales.length);


