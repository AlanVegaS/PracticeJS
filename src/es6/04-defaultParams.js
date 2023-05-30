function newUser(name, age, country){
    var name = name || 'Oscar'//Se valida si el argumento name tiene valor, sino asigna por defecto a 'Oscar'
    var age = 'age' || 34
    var country = country || 'MX'
    console.log(name, age, country)
}

newUser()
newUser('David', 15, 'CO')

function newAdmin(name = 'Oscar', age = 34, country = 'MX'){//desde la declaracion se puede validar si el argumento tiene valor o no
    console.log(name, age, country)
}

newAdmin()
newAdmin('David', 15, 'CO')

const newAdmin2 = (name = 'Oscar', age = 34, country = 'MX') => console.log(name, age, country)
newAdmin2()
newAdmin2('David',55, 'CO')