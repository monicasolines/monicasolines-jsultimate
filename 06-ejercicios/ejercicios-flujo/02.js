let longitud = 7;

function crearArray(n) {
    let newArray = [];

    for(let i=0; i<longitud; i++) {
        newArray[i]=i+1;
    }
    
    /* o...
     for(let i=0; i>n; i++) {
        newArray.push(i+1);
    }
    */
   
return newArray;
}

let resultado = crearArray(longitud)
console.log(resultado);
