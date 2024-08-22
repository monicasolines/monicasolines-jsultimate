// esto imprime la hora actual de tu pc
const ahora = new Date;
console.log(ahora);

// fecha que yo le doy
const fecha = new Date('December 11 1986 14:15 GMT -0300')
console.log(fecha);

// como argumentos(año, mes(en base 0= diciembre:11), dia, hora, minutos, segundos, milisegundos)
const fecha2 = new Date(1986, 11, 25, 14, 15);

// fecha en formato internacional (metodos de fecha)
//ISO es el que se usa mas con clientes y servidores
fecha2.toDateString //no muestra zona horaria
fecha2.toISOString //mejor
fecha2.toTimeString //muestra zona horaria, pero ni dia, ni mes ni año

//obetener año, mes o dia de una fecha (metodos)
fecha.getDate //dia del mes en numeros
fecha.getDay // dia de la semana emepezando lunes
fecha.getFullYear
fecha.getHours
fecha.getMilliseconds
fecha.getMinutes
fecha.getMonth
fecha.getSeconds
fecha.getTime

//cambiar fecha (metodos)
fecha.setDate
fecha.setFullYear
fecha.setHours
//etc...