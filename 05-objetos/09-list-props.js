const punto = {
    x: 10,
    y: 15,
    // este metodo dibujar puede hacerse asi: (o como esta abajo)
    // dibujar: function () {
    //     console.log('Dibujando');
    // }
    dibujar () {
        console.log('Dibujando');
    }
};
// delete punto.dibujar;
// punto.dibujar();

// // este metodo in lo que hacer es revisar si la propiedad esta en el obj
// if ('dibujar' in punto) {
//     punto.dibujar();
// }

//con esto Object.keys(obj) se puede listar las propiedades
// console.log(Object.keys(punto));
for (let key in punto) {
    console.log(key, punto[key]);
    
}
