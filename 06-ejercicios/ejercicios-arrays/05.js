const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

function obtenerMayor (arr) {
    let mayor = arr[0];
    for (let element of arr) {
        if (mayor.edad < element.edad) mayor = element;
    }
    return mayor;
}

//otra manera de hacerlo 
function obtenerMayor2 () {
    return usuarios.reduce((acc,elemento) => {
        return elemento.edad > acc.edad ? elemento : acc;
    }, usuarios[0])
}

console.log(obtenerMayor2(usuarios));
console.log(obtenerMayor(usuarios));
