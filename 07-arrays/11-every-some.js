let usuarios = [
    {id: 1, activo: true},
    {id: 2, activo: false},
    {id: 3, activo: false},
]

//este se asgura de que todos sean true o devuelve false
//entonces o para al encontrar un false y devuelve false o continua hasta 
//terminar el array y no encontrar ninguno y devuelve truue
let todosActivos = usuarios.every(u => {
    console.log('todos activos', u.id);
    return u.activo
})

console.log(todosActivos);


console.log('abajo de esto es el metodo some');
// se ejecuta hasta que encuentre algun valor que sea true, y luego termina
//esto se debe a que solo se ejecuta hasta que encuentre ALMENOS uno
let algunoActivo = usuarios.some(u => {
        console.log( u.id);
        return u.activo
 })

 console.log(algunoActivo);
 