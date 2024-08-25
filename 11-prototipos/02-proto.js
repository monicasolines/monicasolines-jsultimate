function User() {
    this.name = 'Moni';
    this.logger = function() {
        console.log('loggeando...');
        this.login();
    }
}

User.prototype.login = function () {
    console. log('iniciando sesion', this.name);
    }


// console.log(User.prototype);


    const user1 = new User();
    const user2 = new User();

    // user1.login();
    // console.log(user1.login == user2.login); //false 
    
    console.log(user1);
    user1.login();
    user1.logger();
    