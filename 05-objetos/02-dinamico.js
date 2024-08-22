const user = { id: 1};


user.name ='Nicolas';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);
/* 
si uso CONST si le puedo agregar o eliminar propiedades 
a los objetos y a los arrays y si le puedo cambiar el valor 
al objeto(en este caso id) PERO NO puede dejar de ser objeto
*/




/* 
para crear un objeto que no se le pueda modificar nada se usa:
Object.freeze();
*/
const user1 = Object.freeze({ id: 1});
user1.name='Nico';
console.log(user1);
/* se imprime pero no cambia nada*/



/*en cambio si quiero poder cambiar el valor a la propiedad
 que ya tiene pero no agregar ni eliminar se usa seal: 
 en este caso el id se cambio pero no se agrego name
 */
 const user2 = Object.seal({ id: 1});
 user2.name='Nico';
 user2.id = 2;
 console.log(user2);