const usuarios = [
    {edad: 17, nombre: "Pepe"},
    {edad: 13, nombre: "Pedro"},
    {edad: 37, nombre: "Pablo"},
    {edad: 67, nombre: "monica"},
];

// // map recive (elemento, indice, array)
// esto crea un elemento html usando lista y uniendo al html con join vacio
const lista = usuarios.map(u => {
    return `<li> ${u.nombre} </li>`
});
console.log(lista);

const html = `<ol>${lista.join("")}</ol>`
console.log(html);

// crear nuevo listado que agregra la propiedad mayor(para mayor de edad)
const mapped = usuarios.map((u) => {
    return {
        ...u,
        mayor: u.edad>17,
    }
})
console.log(mapped);

// encadenar metodos. esto crea una cadena nueva de los nombres
//(pero solo de los mayores de edad)
const lista2 = usuarios
    .filter(u => u.edad > 17)
    .map(u => {
    return `<li> ${u.nombre} </li>`
});
console.log(lista2);
