class User {
    constructor(name) {
        this.name = name;
        this.instancia = function () {}
    } 

    activo = true;

    login() {
        console.log('hola mundo');
        
    }
}

// function () {
//     console.log('hola mundo');
// }

const u = new User('Moni Solines');