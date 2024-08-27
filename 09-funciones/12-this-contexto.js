const usuario = {
    nombre: 'nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    monstrarCiudadanias() {
        this.ciudadanias.forEach(function (ciudadanias) {
            console.log(this.nombre, ciudadanias);
            
        }, this);
    }
}

usuario.monstrarCiudadanias();