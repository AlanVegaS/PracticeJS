const obj = { name: 'Alan', age: 26, lng: { js: true, css: true } }

//console.log(obj.hobies.hola);//TypeError: Cannot read properties of undefined (reading 'hola')
console.log(obj.hobies?.hola);//undefined
console.log(obj.hobies?.hola||'No existe la propiedad');//No existe la propiedad