// short-circuit

/*
OR devuelve el primero que evalue en true (En JavaScript,
    el operador || devuelve el primer valor truthy que
encuentra, o el último valor si todos los valores son falsy.)

AND devuelve el ultimo que evalua en true 
(El operador lógico && (AND) en JavaScript tiene 
un comportamiento conocido como cortocircuito (short-circuiting).
 Este comportamiento implica que si la primera operando de la
 expresión AND es falsy, el resultado de toda la expresión 
 será falsy, sin necesidad de evaluar el segundo operando.
 Esto se debe a que en una operación AND, ambas condiciones 
 deben ser verdaderas para que el resultado sea verdadero.
 Si la primera ya es falsa, no hay necesidad de comprobar 
 la segunda, porque el resultado final ya no puede ser
 verdadero.)
*/

// falso o valores falsy
// false
//0
//''
// null
//undefined
//NaN


let nombre = 'Moni';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('Soy funcion 1');
    return false;
}

function fn2() {
    console.log('Soy funcion 2');
    return true;
} 

let x= fn1() && fn2();
