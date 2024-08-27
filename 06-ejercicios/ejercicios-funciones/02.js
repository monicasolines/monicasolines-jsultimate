const obj = {
    nombre: 'nicolas',
};

function extender(usuario) { 
    usuario.login = () => {
        console.log('Esta iniciando sesion:', usuario.nombre);
    }
    usuario.logout = () => {
        console.log('Esta cerrando sesion:', usuario.nombre);
    }
    return usuario.login(), usuario.logout();
}

const usuario = extender(obj);

console.log(obj);
// usuario.login();
