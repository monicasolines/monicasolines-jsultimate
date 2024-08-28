let promesa1 = new Promise((res, rej) => {
    res(12); 
});
    
let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => {
    return valor + 18;
}).then((valor2) => {
    console.log('la segunda promesa');
}) 