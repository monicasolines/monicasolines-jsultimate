let punto = {
    x: 10,
    y: 15,
}

let clonePunto = Object.assign({}, punto, {z:20});

console.log(clonePunto);
console.log(punto);
