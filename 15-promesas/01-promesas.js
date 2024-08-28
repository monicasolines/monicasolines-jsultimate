// resive una funcion con dos parametros(estos dos parm son funciones)
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hola Mundo'), 1000);
});

promesa.then(valor => console.log(valor), e => console.log('error', e))