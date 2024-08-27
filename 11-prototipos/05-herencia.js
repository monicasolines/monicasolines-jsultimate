function User() {
    this.name = 'hola mundo'
}

function Product() {
    this.name = 'producto'
}

function Entidad() {}
Entidad.prototype.save = function () {
    console.log('guardando...', this.name); 
}
Entidad.prototype.validate = function () {
    console.log('validando...', this.name); 
}

//1 forma de implementar herencia y reutilizar codigo
user.prototype = Entidad.prototype;
user.prototype.constructor = User;

const user = new User();
