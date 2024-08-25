function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('No es un array');
    }
    return arr.reduce((acc, element) => {
        if (typeof element !== 'number' || Number.isNaN(element)) {
            throw new Error(`elemento ${element} no es un numero`);
        }
        return acc + element
    })
}


// console.log(sumaTodo([1,2,3,4]));

//try catch funciona para agarrar error y que si hay alguno no colapse la app
//es por esto que a pesar de tener un error al pasarle un obj a reduce(solo acepta arrays)
//igual se ejecuta luego el ultimo console.log
try {
    console.log(sumaTodo([1,2,NaN, 'hola mundo']));
} catch (error) {
    console.log(error.message);
    
}

console.log('despues del try catch');
