let elemento = document.createElement('p');

//con este se puede crear codigo html
elemento.innerHTML = 'Elemento creado nuevo';

document.body.append(elemento);

// texto plano
elemento.innerText = 'Elemento cambiado';

//cambiar estilos
elemento.style = 'background-color: red; font-weight: bold';
elemento.className= 'parrafo';
elemento.id = 'mi-parrafo';

//darle propiedad personalizada
elemento.setAttribute('mipropiedad', 'mi propiedad');

//encontrar atributo
elemento.getAttribute('mipropiedad');
//ver si tiene atributo especifico
elemento.hasAttribute('mipropiedad');