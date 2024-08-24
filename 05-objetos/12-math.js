// metodos de math

//LOS METODOS MAS USADOS DEL OBJETO MATH

console.log(
    Math.PI, //devuelve el numero pi
    Math.abs(-15),//devuelve el numero absoluto de un numero //ej numero abs de -15 es 15 
    Math.round(15.5), //devuelve el numero redondeado //16
    Math.floor(15.9), //redondea numero hacia abajo //15
    MaTH.ceil(15.1), // redonde numero hacia arriba //16
    Math.pow(2, 3), // devuelve la potencia de un numero (numero, potencia) //8
    Math.sqrt(9), // devuelve la raiz cuadrada de un numero //3
);

console.log(Math.random()); //devuelve un numero aleatorio

// usando math floor y math random podemos conseguir que nos de numeros
//aleatorios del uno al 10
//math random produce un numero del 0 a 1(no incluye 1 osea que 0.999 es el mas grande)
// si multiplicamos esto por 10 nos dara enteros, ej: nos da 0.5 * 10 = 5
// entonces asi nos estara dando numeros entre 0 y 9
//por eso le sumamos 1 para que sean numeros entre 1 y 10
console.log(Math.floor(Math.random() * 10 ) + 1);
