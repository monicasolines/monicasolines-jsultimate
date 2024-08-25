const suma  = (a, b) => {
    // let total = 0;
    // for (let valor of arguments) {
    //     total = total + valor;
    // }
    // return total;

    //el metodo from coge los iterables(Arguments) y los tranforma en array
    return Array.from(arguments)
        .reduce((acc,el) => acc + el);
}

console.log(suma(1, 2, 3, 4));
