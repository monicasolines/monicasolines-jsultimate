
//funcion normal
// function hola () {
//     return 'hola mundo'
// }

//todas las arrow function son anonimas, por eso se la asigno a una variable
// const hola = () => {
//     return mensaje + ' hola mundo';
// }

// esto es lo mismo que la arrow function de arriba solo que tiene return implicito para funcion en una linea
// si tiene mas lineas debe ser como arriba, puede no llevar parantesis si solo tiene un parametro(mensajes)
const hola = mensaje => mensaje + ' hola mundo';


const resultado = hola('canchito feliz');
console.log(resultado);

