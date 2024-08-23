let arr1 = [1,2];
let arr2= [5,6];

// sirve para combinar arrs
let arr3= [0, ...arr1, 3, 4, ...arr2, 7, 8];
let arr4 = [...arr3] // copio el arr3
arr3.pop(); //elimina el ultimo numero

console.log(arr3, arr4);
