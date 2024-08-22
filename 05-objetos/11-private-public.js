function Usuario () {
    this.name = "Monica";
    this.guardar = function () {
        console.log('guardando');
    }
    let log = function () {
        console.log('logging....');
        
    }
}

const usuario = new Usuario;