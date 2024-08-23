let arr1 = [1, 2]
let arr2 = [3, 4]

//concat devuelve nuevo array por eso hay que asignar a nueva variable
let arrayCombinados = arr1.concat(arr2)

console.log(arr1, arr2, arrayCombinados);


//dividir los arrays
//(indice donde empieza, indice donde termina(no se incluye))
let divididos = arrayCombinados.slice(1, 3);

//(indice donde empieza) por lo tando corta desde el indice 1 y todo lo que queda
let divididos2 = arrayCombinados.slice(1);

//si no le paso nada se copia el mismo array entero
let divididos3 = arrayCombinados.slice();

console.log(divididos, divididos2, divididos3);


