const saludo = "Hola Mundo";

//metodo que devuelve el indice del elemento que se busca
saludo.indexOf("M");

// si un texto se encuentra dentro de otro texto
saludo.includes("Mundo") //da true o false

//remplaza variable, pero para que se guarde debo crear nueva variable
saludo.replace("Mundo", "Hola")
const nuevoSaludo = saludo.replace("Mundo", "Hola");


saludo.toLocaleLowerCase
saludo.toLocaleUpperCase
saludo.toLowerCase
saludo.toUpperCase



// recorta el string (el final es exclusivo)
saludo.substring(0,4)

// trim quita los espacios
const espacios = "    hOLA mUNDO    "
espacios.trimEnd //corta espacios al final
espacios.trimStart // corta espacios al comienzo