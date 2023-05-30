const aNumber = null
const validate = aNumber ?? 5
console.log(validate);

const id = 0
const orId = id || "Sin id"
const nullishId = id ?? "Sin id"
console.log( orId ) //  'Sin id'
console.log( nullishId )  // 0