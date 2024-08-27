let obj1 = {id: 1, name: 'pepe'};
function crearCopia(obj) {
    return {
        ...obj
    }
}

// otra opcion:
/*
function crearCopia(obj) {
    let copia = {};
    for (let llave in obj) {
        copia[llave] = obj[llave];
    }
        
    return copia;
}

*/
let obj2 = crearCopia(obj1);
console.log({obj1, obj2});
