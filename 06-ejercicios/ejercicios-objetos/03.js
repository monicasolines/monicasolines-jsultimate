function similares(obj1, obj2) {
    let resultado = true;
    for (let llave in obj1) {
        if (!obj2.hasOwnProperty(llave) || obj1[llave] !== obj2[llave]){
            resultado = false;
        }
    }
    return resultado;
}

let resultado = similares (
    {id:1, name: 'Nico'},
    {id:2, name: 'Nico'},
)

console.log(resultado);
