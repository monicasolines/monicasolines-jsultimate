let objeto = {name: 'Nicolas'}

function agregarId(obj){
    if (typeof obj === 'object') {
    obj.id = Math.floor(Math.random() * 100);
    }
    return obj;
}

agregarId(objeto);
console.log(objeto);
