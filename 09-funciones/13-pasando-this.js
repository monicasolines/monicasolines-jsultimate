(function saludar(...rest) {
    console.log(this, rest);
    
}).bind({propiedad: 'Hola Mundo'})(1,2);

// saludar.call({propiedad: 'Hola Mundo'}, 1, 5);
// saludar.apply({propiedad: 'Hola Mundo'}, [1, 5]);
// saludar.bind({propiedad: 'Hola Mundo'})(3,5)