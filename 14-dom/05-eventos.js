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
}