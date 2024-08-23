const letras = ["a", 1, "b", "c", "d", 1]



console.log(letras.indexOf("c"));

//inicia la busqueda desde el comienzo
console.log(letras.indexOf(1));

//si quiero buscar desde un indice especifico recibe segundo argumento (lo que buscas, indice en el que comienza a buscar)
console.log(letras.indexOf(1, 3));


//indicia busqueda desde el final // si te devuelve -1 es porque no existe es elemento
console.log(letras.lastIndexOf('1'));

//busca dentro del array para ver si esta lo que buscas(devuelve boolean)
console.log(letras.includes('d'));


console.log(letras);