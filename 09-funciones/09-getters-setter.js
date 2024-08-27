const usuario = {
    nombre: 'moni',
    apellido: 'triste',
    // si le agrego get la puedo llamar como propiedad y no como funcion
    get nombreCompleto() {
        return `${usuario.nombre} ${usuario.apellido}`
    },
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    }

    /* este metodo(funcion dentro de objeto) de arriba es igual a 
    nombreCompleto: function () {
        return `${usuario.nombre} ${usuario.apellido}`
    }
    */
}

usuario.nombreCompleto = 'monica mal'
console.log(usuario.nombreCompleto);
