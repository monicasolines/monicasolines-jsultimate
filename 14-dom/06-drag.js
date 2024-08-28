let id;
function createDraggable() {
    let span = document.createElement('span');
    span.id = 'hola-mundo';
    span.innerText = 'arrastable';
    span.draggable = true;
    span.ondragstart = e => {
        id = e.target.id;
    }
    document.body.append(span);
}

function creatDroppableArea() {
    let dropArea = document.createElement('div');
dropArea.className = 'drop';
dropArea.ondragenter = e => {
    e.target.style.background = 'yellow';
}
dropArea.ondragleave = e => {
    e.target.style.background = '';
}
document.body.append(dropArea);

dropArea.ondragover = e => {
    e.preventDefault();
}
dropArea.ondrop = e => {
    e.target.appendChild(document.getElementById(id));
}

}

createDraggable();
let dropArea1 = creatDroppableArea();
let dropArea2 = creatDroppableArea();

// document.body.append(draggable); no es necesario esto porque ya se agrega dentro de la funcion, por lo tanto solo lo llamo arriba