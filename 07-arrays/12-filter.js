const usuarios = [
    {edad: 15, nombre: 'felipe'},
    {edad: 13, nombre: 'nicols'},
    {edad: 25, nombre: 'monica'},
    {edad: 23, nombre: 'silvia'},
]

//sirve para filtrar y asi poder eliminiar objetos o datos que no necesitamos
//en este ejemplo filtraremos los mayores de edad
// filter recibe (elemento que vamos a iterar, indice, y array) = (elemento,indice,arr)
const mayores = usuarios.filter(usuario => usuario.edad > 17);
const menores = usuarios.filter(usuario => usuario.edad < 17);

const mayoresOrden = mayores.sort((a,b) => {
    // si los if son de una linea se pueden borrar los  {}
    if (a.edad < b.edad) return -1
    if (a.edad > b.edad) return 1
    return 0;
});

const menoresOrden = menores.sort((a,b) => {
    if (a.edad < b.edad) return -1
    if (a.edad > b.edad) return 1
    return 0;
});

console.log(mayores);
console.log(menoresOrden);
