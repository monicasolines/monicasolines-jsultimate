const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id: 15},
    ['lala'],
]


// dividir por numeros, strings, objetos
function dividePorTipo(arr) {
    const numeros = [];
    const strings = [];
    const objetos = [];
    const newObj = {}

        arr.map (elemento => {
        if (typeof elemento === 'number') {
            numeros.push(elemento);
        }
        if (typeof elemento === 'string') {
            strings.push(elemento);
        }
        if (typeof elemento === 'object') {
            objetos.push(elemento)
        }
    })

    newObj.numeros = numeros;
    newObj.strings = strings;
    newObj.objetos = objetos
    return newObj;
}

console.log(dividePorTipo(miArray));

//OTRA MANERA DE HACERLO usando filter y mas corta
function dividePorTipo2(arr) {
    return   {
        numeros: arr.filter(element => typeof element === 'number'),
        strings: arr.filter(element => typeof element === 'string'),
        object: arr.filter(element => typeof element === 'object'),
    }
}

console.log(dividePorTipo2(miArray));
