/* Una funcion constructora tiene que tener de nombre el recurso
que hara o creara, en este caso usuarios 
en esta funcion se usa UPPER CAMELCASE (primera letra en mayus)
y si son muchas palabras TODAS las iniciales en mayus
*/

// { id: 1, recuperarClave: function () {} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () {
        console.log('Recuperando clave...');
    }
    
}

let usuario = new Usuario();

console.log(usuario);

/* 
cuando se usa la palabra new:
se crea un objeto literal del aire
se vincula el prototipo de la funcion con el objeto que ce creo
a this se le asigna este objeto
si no retorna nada entonces retorna de manera automatica this

*/


/* las funciones que se asignan a la propiedad de un objeto
ya no se llaman funciones, se llaman metodos */
