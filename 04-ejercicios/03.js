function getbyIdx(arr, idx) {
    if (idx < 0) {
        return 'elemento es menor a 0';
    } 
    
    if (arr.length <= idx) {
        return 'elemento no existe';
    } 
    
    if (arr.length > idx) {
        return arr[idx];
    }

    

}

let resultado = getbyIdx([1, 2], 0);
console.log(resultado);


/*
otra version:

function getbyIdx(arr, idx) {
    if (idx < 0) {
        return 'elemento es menor a 0';
    } else if (arr.length <= idx) {
        return 'elemento no existe';
    } else {
        return arr[idx];
    }

    

}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);

*/