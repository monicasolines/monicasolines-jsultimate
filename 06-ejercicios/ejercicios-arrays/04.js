const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

//este lo hice con for of y un if (si el if es de una linea borro los {})
function cuantosPremium(usuarios) {
    let i = 0;
    for (element of usuarios ) {
        if (element.plan !== 'free') i++;
    }
    return i;
}

//este se hace con reduce y usando ternario (lo hice mas corto ya que es de una)
function cuantosMayores(usuarios) {
    return usuarios.reduce((acc,elemento) => 
        elemento.edad > 17 ? acc + 1 : acc, 0)
}

console.log(cuantosMayores(usuarios));
console.log(cuantosPremium(usuarios));

