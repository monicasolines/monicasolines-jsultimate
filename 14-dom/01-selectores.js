
//devuelve un HTMLElement
let htmlElement = document.getElementById('cuerpo');

//devuelve HTMLCollection (porque hay varios elementos con esta clase)
let elementosRed = document.getElementsByClassName('red');

let elementosChanchito = document.getElementsByName('chanchito');

//devuelve HTMLCollection
let parrafos = document.getElementsByTagName('p');

//HTMLElement (# : por id, . : por class)
let el = document.querySelector('#cuerpo');

//este busca mas de un elemento (# : por id, . : por class, nombre : por etiqueta)
let els = document.querySelectorAll('p');

