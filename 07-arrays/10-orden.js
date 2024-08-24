let numeros = [15, 10, -3, 30];
let numeros2 = [15, 10, -3, 30];

// ordena de menor a mayor
numeros.sort()
console.log(numeros);

// de mayor a menor
numeros2.reverse()
console.log(numeros2);

// tambien funcionan con letras, chars
let letras = ['z', 'a', 'd', 'f'];
let letras2 = ['Z', 'a', 'd', 'f'];

//  let newletras2 = [];
// for (element of letras2) {
//     element = element.toLowerCase();
//     newletras2.push(element);
// } 

// este sirve igual que el de arriba para comparar y ordenar sin importar si es minuscula o mayuscula
//PERO ESTE SI DEVUELVE EL ARRAY INICIAÑ SIN CAMBIOS(NINGUNA LETRA SE CAMBIA A MAYUSUCULA O MINUSCULA, SOLO SE ORDENA)
letras2.sort((a,b) => {
    /*
    a antes de b => -1
    b antes de a => 1
    si son iguales => 0
    */
   let alower = a.toLowerCase();
   let blower = b.toLowerCase();

   if (alower < blower) {
    return -1;
   }

   if (alower > blower) {
    return 1;
   }

   return 0;
})

 // este funciona iguao que el de arriba para ordenar objetos por propiedad(edad en este caso)
let usuarios = [
    {edad: 15, nombre: 'felipe'},
    {edad: 13, nombre: 'nicols'},
    {edad: 25, nombre: 'monica'},
]

usuarios.sort((a,b) => {
    if (a.edad < b.edad) {
        return -1;
    } 
    if (a.edad > b.edad) {
        return 1;
    }
    
        return 0;
    
})

console.log(usuarios);
