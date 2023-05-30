class User {
    constructor(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }

    #greeting() {
        return `Hello ${this.userName}!`;
    }

    get #_userAge() {
        return this.userAge;
    }

    set _userAge(age) {
        this.userAge = age;
    }
}

const pepito = new User('Pepito', 20);
//console.log(pepito.greeting());//metodo privado, no se puede acceder a el
console.log(pepito._userAge); // undefined
console.log(pepito._userAge = 16); // 16