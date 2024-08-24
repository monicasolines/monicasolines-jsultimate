//math abs devuelve el valor absoluto de un elemento
function paraAbsoluto (arr) {
    const result = arr.map(elemento => {
        return Math.abs(elemento)
    });
    return result;
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos);
