// Arrays destructuring
let fruits = ['Apple', 'Banana', 'Orange']
let [a, b] = fruits// Se crean el Let a y b con los valores respectivos a la posiocion del Array fruits
let [, , c] = fruits;
console.log(a, b, c)//Apple Banana Orange

let [x, y, , z, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(x, y, z, rest);//10 20 40 [ 50, 60, 70, 80, 90 ]

//Object destructing
let user = { username: 'Alan', age: 26 }
let { username, age } = user// Se crean los let username y age con los valores del objeto user 
console.log(username, age)//Alan 26

// Spread operator
let person = { name: 'Alan', age: 26 }
let country = 'MX'

let data = { id: 1, ...person, country }
console.log(data)//{ id: 1, name: 'Alan', age: 26, country: 'MX' }

//Rest 
function sum(num, ...values) {
    console.log(values)
    console.log(num)
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9)

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)