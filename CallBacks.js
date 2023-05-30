//Un callBack es una funcion que recibe como parametro una funcion
function comprar(Item1, Item2, print) {
    let cost = Item1+Item2
    print(cost)
}
function print(cost) {
    console.log(`The total cost is: ${cost}`)
}
comprar(12,34,print)


//Callbacks whith arrow functions
const buy = (Item1, Item2, TotalPrint) => {
    let cost = Item1+Item2
    TotalPrint(`The total cost is: ${cost}`)
}
const PrintLog = (text) => console.log(text)
buy(7,8,PrintLog)

buy(9,8,
    (text) => console.log(text+"..."))