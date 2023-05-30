const ArrowFunction = () => {
    console.log('Funcion con flecha')
    return 'Funcion con flecha'
}

console.log(ArrowFunction())

//Funcion en una sola linea
const SimpleFunction = () => "Simple function"
console.log(SimpleFunction())

const ParamFunction = value => `Function whit param: ${value}`
console.log(ParamFunction("Holi"))

const ParamsFunction = (v1, v2) => v1+v2
console.log(ParamsFunction(50,63))