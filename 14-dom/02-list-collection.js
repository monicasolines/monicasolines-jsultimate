// diferencia entre HTMLCollection y NODEList

let collection = document.getElementsByTagName('p');
let list = document.querySelector('p');

console.log(collection, list);

//metodo de collections(ayuda para buscar un elemento en un collectio)
let item1 = collection.namedItem('chanchito');
//se busca por indice:
let item2 = collection.item(3);
//no es un array pero se puede encontrar asi:
let item3 = collection[3];

//iterar elementos de un collection
for (let elemento of collection) {
    console.log(collection);
}
Array.from(collection).forEach(x => console.log(x));
[...collection].forEach(x => console.log(x));


let item4 = list.item(3);
let item5 = list.item[3];

//metodos node list
list.forEach(x => console.log(x));