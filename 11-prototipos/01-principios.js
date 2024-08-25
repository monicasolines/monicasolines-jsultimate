//PRINCIPIOS

//1. ENCAPSULACION: (agrupar metodos y props)
const user = {
    nombre: 'Hola',
    apellido: 'Mundo',
    getNombreCompleto() {
    return [this.nombre, this.apellido].join(' ');
    }
}


//2. ABSTRACCION (esconder detalles)
const user2 = new User();
user2.password = 'password';
user2.save();


// 3. HERENCIA
// se puede crear una funcion constructora padre 
//y que otras funciones constructoras obtengas los props o metodos de la padre


//4. POLIMORFISMO