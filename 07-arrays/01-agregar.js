const letras = ['a','b'];

//agrega elementos al final del array
letras.push('c', 'd'); 

// agrega elementos al comienzo
letras.unshift('y', 'z')

//aregrar elemento despues de un elemento especificio(en este caso a) 
//sin borrar splice.(indicedondeseagrega/cuantos quieres borrar/ que quieres agregar)
letras.splice(3, 0, 1, 2)

console.log(letras);

