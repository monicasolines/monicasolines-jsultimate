class Restaurants {
    constructor(name) {
        this.name = name;
    }


    getTimetable() {
        console.log('horario restaurante')
    }

    static getRestaurant(id) {
        return new Restaurants('BBQ')
    }
}

//pertenece a la clase pero no a la instancia del objeto
const r = Restaurants.getRestaurant(12);
