function groupBy (arr, prop) {
    if (prop === 'plan') {
        return {
            free: arr.filter(element => element.plan === 'free'),
            premium: arr.filter(element=> element.plan === 'premium'),
            gold: arr.filter(element=> element.plan === 'gold'),
        }
    } 
    if (prop === 'edad') {
        return {
            mayor: arr.filter(element => element.edad > 17),
            menor: arr.filter(element => element.edad <= 17),
        }
    }
    
}

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold'},
];

console.log(groupBy(usuarios, 'edad'));
