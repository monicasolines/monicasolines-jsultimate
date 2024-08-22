let array = [2, 5, 7, 15, -5, -100, 55];
let i = 0;
let positivos = 0;

function cuantosPositivos(array) {
        for (numero of array) {
            if ( numero > 0) {
                positivos++;
            }
        i++;
        }
    return positivos;
}

let resultado = cuantosPositivos(array); 
console.log(resultado);