let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let button = document.createElement('button');
button.innerText = 'Enviar';
form.append(input);
form.append(button);

document.body.append(form);

form.onmouseenter = e => {
    console.log('entra el mouse', e);
    button.style = 'background-color: red;'
}

form.onmouseleave = e => {
    console.log('sale el mous');
    button.style = 'background-color: red;'
}

input.onfocus = e => {
    console.log('input on focus');
}

input.onblur = e => {
    console.log('perdio el focus');
}

input.onchange = e => {
    console.log('valor cambia', e.target.value);
}

button.onclick = e => {
    e.preventDefault();
    console.log('button clicked');
}
// estas dos(la de arriba y la de abajo ) son lo mismo escrito diferente
button.addEventListener('click', e => {
    e.preventDefault();
    console.log('button clicked');
} )