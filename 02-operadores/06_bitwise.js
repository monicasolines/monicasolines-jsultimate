//bit: digito en binario : 0 1
//Byte: 8 bits
// Byte: 00000000


console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101 
console.log(3 | 5); // 00000101 

/*lo que hace no es elegir un 
numero de los dos si no juntar sus 1's en su forma de bits */


console.log(1 & 3); // 00000001
console.log(1 & 4); // 00000000
console.log(3 & 5); // 00000001

/* usando el & el bit en el mismo lugar de ambos numeros
 debe tener un 1(o sea se deben compartir los 1`s*/