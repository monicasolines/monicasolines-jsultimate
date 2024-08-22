/* las factory functions ayudan a no tener un programa 
repetitivo cuando se usan objetos con igual estructura
USAN camelCase (primera minuscula, segunda mayusucula)
y suelen iniciar con crear o create
*/


function crearUsuario(name, email, activo) {
    return {
        email,
        name,
        activo,
        recuperarClave: function () {
            console.log('Recuperando Clave...');
        }
    };
}

let user1 = crearUsuario ('Nicolas', 'Nicolas@', true);
let user2 = crearUsuario ('Maria', 'Maria@', false);
let user3 = crearUsuario ("Monica", "Monica@", false)

console.log(user1);
console.log(user2);
console.log(user3);
