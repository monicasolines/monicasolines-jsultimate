class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    #logger() {

    }
    
    getName() {
        return this.#name;
    }
}

const u = new User('Moni Solines');