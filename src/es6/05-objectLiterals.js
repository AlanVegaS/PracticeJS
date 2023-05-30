// Enahced object literals

function newUser(user, age, country, uId){
    return {user, 
        age, 
        country, 
        id:uId
    }
}

console.log(newUser('Alan', 26, 'MX', 1))//{ user: 'Alan', age: 26, country: 'MX', id: 1 }