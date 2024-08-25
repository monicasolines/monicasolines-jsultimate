//funciona con todo tipo de funciones
const suma = (a, b, ...rest) => {
    console.log(rest);
}

suma(1,2,3,4,5,6,7);

const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
}

// logMsg('Servidor:', "error1", 'peticion aceptada', 'error activo');

let mensajes = ["error1", 'peticion aceptada', 'error activo']
logMsg('cliente movil:', ...mensajes, 'otro error')