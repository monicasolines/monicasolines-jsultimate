let objeto = {
    id: 1,
    name: 'chanchito',
    login: function () {},
    logout: function () {},
}

let propiedad = 'name';

function tieneProp(obj, propiedad) {
    let tiene = false;
    if (obj.hasOwnProperty(propiedad)) {
        tiene = true;
    }
    return tiene;
}

//se puede simplificar asi:
// function tieneProp(obj, propiedad) {
//     return obj.hasOwnProperty(propiedad);
// }


console.log(tieneProp(objeto, propiedad));
