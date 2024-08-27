

/* 
{
    url: ...    
    bucket: amazon S3
    port: 80
}
*/

const config = {
    url: 'www.google.com'
}
//esto se puede dar como parametro { url } = {url: 'por defecto'}, y este buscar la propiedad url en un objeto pero si no esta te da 'por defecto'

//url = 'www.google.com' ==>> significa que si no le paso una url tendra por defecto www.google.com
// en este caso paso por defecto bucket y port
function configurarAPI(url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`;
}

// console.log(configurarAPI());
console.log(configurarAPI('www.google.com'));
