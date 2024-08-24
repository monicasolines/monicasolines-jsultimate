
const miArray = [
    "Hola",
    12,
    true,
    "Mundo",
    {},
    {id: 15},
    ['lala'],
]

function dividePorTipo(arr) {
    return {
        numeros: arr.filter(element => typeof element === 'number'),
        strings: arr.filter(element => typeof element === 'string'),
        boolean: arr.filter(element => typeof element === 'boolean'),
        object: arr.filter(element => typeof element === 'object'),
    }
}

console.log(dividePorTipo(miArray));


function dividePorTipo2(arr) {
    return arr.reduce((acc, element) => {
        let llave = typeof element;

        acc[llave]= acc[llave] ? acc[llave] : [];
        acc[llave].push(element);
        return acc;
    }, {});
}

console.log(dividePorTipo2(miArray));
