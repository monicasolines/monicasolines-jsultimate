/*

*/

let obj = {};

let obj2 = new Object();

/*
los constructores que existen 
new Object();
new Array(); []
new String(); "" '' ``
new Number(); 
new Boolean();
*/

function Usuario () {
    this.name = 'Moni';
}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);

//los strings literales funcionan difrerentes a los de constructor
// usar .valueOf() para conseguir su valor de verdad, igual para number y boolean
