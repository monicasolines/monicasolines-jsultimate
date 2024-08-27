Object.prototype.isEqual = function (obj) {
    //... this === obj
}
//mejor no extender prototipos de funciones constructoras
let x = {};
x.isEqual({a: 1});
