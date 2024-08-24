const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 23, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

// Obtener los usuarios pago
// Ordenar de mayor a menor edad
// Devolver el nombre del usuario
// Crear una plantilla HTML
// Imprimirla en consola

function todos (usuarios) {
    const newUsuarios= usuarios.filter(usuario => {
        return usuario.plan !== 'free' && usuario.edad > 18
    })
    newUsuarios.sort((a, b) => a.edad - b.edad);
    const mapped = newUsuarios.map(usuario => {
        return `<li>${usuario.nombre}</li>`;
    })
    const result = `<ol> ${mapped.join("")}</ol>`;
    return result;
}

console.log(todos(usuarios));
