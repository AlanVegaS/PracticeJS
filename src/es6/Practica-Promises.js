/*Salida
1
3
2
*/
console.log('1');
const delay = setTimeout(() => {
    console.log(2);
}, 2000);
console.log(3);

/*Salida
1
2
3 Sucessful
*/
const promiseDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(2);
        resolve('Sucessful')
    }, 2000);
})
console.log(1);
promiseDelay
    .then(x => console.log(3 + ' ' + x))


//Forma larga
const usuarios = { id: 1, name: 'Alan' }
const phones = { id: 1, phoneNumber: '1234' }
const getUser = id => {
    return new Promise((resolve, reject) => {
        if (usuarios.id === id) resolve(usuarios)
        reject('Doesnt exist user')
    })
}
const getPhone = id => {
    return new Promise((resolve, reject) => {
        if (phones.id === id) resolve(phones)
        reject('Doesnt exist user')
    })
}
getUser(2)
    .then(res => {
        console.log(res)
        getPhone(1)
            .then(res => console.log(res))
            .catch(e => console.log(e))
    })
    .catch(e => console.log(e))


//Forma corta
const usuarios1 = { id: 1, name: 'Alan' }
const phones1 = { id: 1, phoneNumber: '1234' }
const getUser1 = id => {
    return new Promise((resolve, reject) => {
        if (usuarios1.id === id) resolve(getPhone1(id))
        reject('Doesnt exist user')
    })
}
const getPhone1 = id => {
    return new Promise((resolve, reject) => {
        if (phones1.id === id) resolve({...usuarios1,...phones1})
        reject('Doesnt exist user')
    })
}
getUser1(1)
    .then(res => {
        console.log(res)
    })
    .catch(e => console.log(e))