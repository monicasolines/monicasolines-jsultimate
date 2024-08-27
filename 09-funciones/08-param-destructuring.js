
// const config = {
//     url: 'url',
//     direccion: {
//         calle: 'calle dir',
//         numero: 80,
//     }
// }

const config = [
    'www.google.com',
    145,
    80,
]

// tambien le puedo pasar {url} como parametro y seria igual que psarle config y crear la variable
function webserver([url, ...rest]) {
    //crea una constante de la propiedad con el mismo nombre de la propiedad
    //const {url} = config; // esto es igual a const url = config.url;  
    
    /// destructuracion = const [url, ...rest] = config;
    
    console.log(config);
    
    
    return url;
}


console.log(webserver(config));
