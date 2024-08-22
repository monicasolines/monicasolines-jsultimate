
// este es un array de objetos: (los objetos son los { })
let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

/*esto es un array de pares: es un array de arrays, 
tiene un id y luego el objeto completo */
let pares = [
    [1, { id: 1, name: 'Nicolas'}],
    [2, { id: 2, name: 'Felipe'}],
    [3, { id: 3, name: 'Chanchito'}],
];

/* esta es la funcion que tiene que devolver 
los pares de arriba */
function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado); 



// for ...of devuelve el elemento del arreglo
//for ... in devuelve el indice del arreglo
//arreglo es array
/* puedo imprimir el elemento usando for..in si usamos 
 console.log(arr[idx]); // 'a', 'b', 'c' ya que arr[idx] accede
 al elemento de ese indice */
 // arr[idx] accede al elemento de ese indice