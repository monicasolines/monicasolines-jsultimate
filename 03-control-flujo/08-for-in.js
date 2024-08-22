let user = {
    id: 1,
    name: 'Pepe',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

// se puede mejor MEJOR usar FOR OF
// let animales = ['chanco', 'dragon', 'perro'];
// for (let indice in animales) {
//     console.log(indice, animales[indice]);
// }

//prop = propiedad