let longitud = 15;

function crearArray(n) {
    let arr = [];
    let i;
    for (i=0; i < n; i++) {
        arr[i] = i+1;
    }
    return arr;
}

let resultado = crearArray(longitud);
console.log(resultado); 