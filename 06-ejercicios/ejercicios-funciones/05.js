function ordenar(text, fn) {
    let sorted= text.replace(/\s+/g, '').split('').sort( (a,b) => {
        let alower = a.toLowerCase();
        let blower = b.toLowerCase();
        if ( alower < blower) return -1
        if ( alower > blower) return  1
        return 0;
    }).join('');
    //esto primero las convierte en array, las ordena, y vuelve a string
    fn(sorted);
}

ordenar('Hola Mundo', console.log);
