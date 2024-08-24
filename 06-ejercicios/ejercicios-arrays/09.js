const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

const users = [
    { age: 22, name: 'Michael', membership: 'premium' },
    { age: 27, name: 'Kevin', membership: 'free' },
    { age: 29, name: 'Happy pig', membership: 'free' },
]; 
    
// Unificar las estructuras de usuarios y user
// fusionar los array
// ordenar por edad
// crear plantilla HTML:
// <li>Nombre: name, Edad: age</li>
// imprimir la lista en consola

// Unificar las estructuras de usuarios y user
function userInSpanish (users) {
    const usersInSpanish = users.map (users => {
        return {
            edad: users.age,
            nombre: users.name,
            plan: users.membership,
        }
    })
    return usersInSpanish;
}

//fucionar los dos arrays
function fucionar () {
    const userInSpanishArray = userInSpanish(users)
    let newArray = [...usuarios, ...userInSpanishArray]
    return newArray;
}
let mergedArray = fucionar();

// ordenar por edad
function ordenarPorEdad (array) {
    array.sort((a,b) => {
        if (a.edad > b.edad) return -1;
        if (a.edad < b.edad) return 1;
        return 0;
    })
    return array;
}
let sortedArray = ordenarPorEdad(mergedArray);

// <li>Nombre: name, Edad: age</li>
function liTemplate (sorted) {
    const liTemplate = sorted.map(element => {
        return `<li> Nombre: ${element.nombre}, Edad: ${element.edad} `
    })
    return liTemplate;
}
let liTemplateString = liTemplate(sortedArray);

// crear plantilla HTML:
const html = `
<ol> 
    ${liTemplateString.join(`
    `)}
</ol>`

// imprimir la lista en consola
console.log(html);
