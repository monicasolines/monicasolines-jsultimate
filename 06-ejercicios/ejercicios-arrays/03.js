const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

//no usar map porque devuelve array del mismo tamaño
function getPaidUsers (users) {
    const paid = users.filter(u => {
        return u.plan !== 'free' 
    })
    return paid
}

console.log(getPaidUsers(usuarios));
