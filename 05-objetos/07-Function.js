function Punto (x,y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {console.log('Dibujando...')}
}

Punto.call({}, 1, 2)

// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function () {console.log('Dibujando...')}`
// );

// const p = new Point(1, 2);
// console.log(p);

// existe el metodo call y apply que permite extender objetos ya existentes