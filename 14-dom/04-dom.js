let el = document.createElement('p');
el.innerText = 'Elemento creado';

//texto y nodos
document.body.append(el);

//eliminar elemento
el.remove();

//volver a agaregar elemento al comienzo
document.body.prepend(el);

//reemplazar elementos
let div = document.createElement('div');
div.innerText = 'soy un texto';
el.replaceWith(div);

//alternativa para reemplazar elementos(nodo padre) (reemplazante, lo que reemplazas)
document.body.replaceChild(el, div);
//elimina
document.body.removeChild(el);
//agregar elementos al final, solo recibe nodos
document.body.appendChild(el);
//insertar div a lado (no al comienzo ni final)
document.body.insertBefore(div, el);
// recibe un string(hay cuatro opcions de loc), y despues el elemento que agregas
// lo inserta antes de la etiqueta
document.body.insertAdjacentElement('beforebegin', div);
// inserta al comienzo pero despues de etiqueta
document.body.insertAdjacentElement('aferbegin', div);
//lo inserte al final pero antes de etiqueta
document.body.insertAdjacentElement('beforeend', div);
//final de la etiqueta despues de esta
document.body.insertAdjacentElement('afterend', div);

document.body.insertAdjacentHTML();
document.body.insertAdjacentText();
