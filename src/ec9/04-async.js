async function* anotherGenerator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}
const callAnotherGenerator = anotherGenerator()
callAnotherGenerator.next().then(response => console.log(response.value))
callAnotherGenerator.next().then(response => console.log(response.value))
callAnotherGenerator.next().then(response => console.log(response.value))
console.log('Hola')


function* anotherGenerator2(){
    yield Promise.resolve(1)
    yield Promise.resolve(2)
    yield Promise.resolve(3)
}
const callAnotherGenerator2 = anotherGenerator2()
console.log(callAnotherGenerator2.next().value)
console.log(callAnotherGenerator2.next().value)
console.log(callAnotherGenerator2.next().value)
console.log('Hola')


async function arrayOfNames(array){
    for await(const val of array) {
        console.log(val);
    }
}

const names = arrayOfNames(['Alan', 'Eduardo'])
console.log('adios');