// this hace referencia un objeto
/* si this no esta en un obj si no en una funcion 
entoncees this hace referencia al obj window 
y en caso de node: hace referencia al global*/
//si se usa new hace referencia al obj que sera creado

//AQUI HACE REFERENCIA AL OBJETO
const user = {
    nombre: 'nicolas',
    login() {
        console.log(this);
        
    }
};

//otra manera de darle un metodo a un obj(igual que login)
// solo que logout es anonima y login no)
user.logout = function () {
    console.log(this);
}
user.logout();

//TERMINA

//THIS DENTRO DE FUNCION
function log() {
    console.log(this);
}

log();

//TERMINA

//REFERENCIA A NEW
function Log(mensaje, nombre) {
    this.mensaje = mensaje;
    this.nombre = nombre;
    console.log(this);
}

const l = new Log('Hola mundo', 'pepe');