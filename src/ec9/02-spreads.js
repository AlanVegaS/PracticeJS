const user = { username: 'Alan', age: 26, country: 'MX' }
const { username, ...values } = user
console.log(username)//Alan
console.log(values)//{ age: 26, country: 'MX' }