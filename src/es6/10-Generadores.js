let arr = [0, 1]//solucion mia 
function* fibonacci() {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1])
    yield arr
}

console.log(fibonacci().next())
console.log(fibonacci().next())
console.log(fibonacci().next())
console.log(fibonacci().next())
console.log(fibonacci().next())
console.log(fibonacci().next())

function* fibonacci2() {//solucion internet
    let firstNumber = 0
    let secondNumber = 1
    yield firstNumber
    yield secondNumber
    while (true) {
        const newValue = firstNumber + secondNumber
        yield newValue
        firstNumber = secondNumber
        secondNumber = newValue
    }
}
const generator = fibonacci2()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())