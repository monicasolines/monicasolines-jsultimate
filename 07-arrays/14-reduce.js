const numeros = [1, 2, 3, 4];

//reduce recibe(acumulador, elemento iterado) => {}, valor inciial del accumulador)
const suma = numeros.reduce((acc, elemento) => {
    return acc + elemento;
}, 0);

console.log(suma);



//podemos usar reduce tambien para aplanar array
// en este caso reduce ayudara a que quede = [1, 2, 3, 4, 5]
const anidado = [ [1,2], 3, [4, 5]];

const plano = anidado
    .reduce((acc, elemento) => acc.concat(elemento), []);

console.log(plano);




const usuarios = [
    {edad: 17, nombre: "Pepe"},
    {edad: 13, nombre: "Pedro"},
    {edad: 37, nombre: "Pablo"},
    {edad: 67, nombre: "monica"},
];

const indexado = usuarios.reduce((acc, elemento) => {
       return {
        ...acc,
        [elemento.nombre] : elemento
       }
}, {});

console.log(indexado);
