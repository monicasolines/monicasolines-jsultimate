// AND, OR, NOT

/* AND && 
false y true = false
true y true = true
false y false = true 
*/

let mayor = false;
let suscrito = true;

// console.log(true && true);
// console.log(false && true);

console.log('operador and', mayor && suscrito);

/* OR ||
 false y true = true
true y true = false
 */ 
console.log('operador or', mayor || suscrito);

/* NOT !
invierte el valor
*/
console.log('operador not', !mayor);

let catalogoInfantil = !mayor;