const promiseFunction = () => {
    return new Promise((resolved, reject) => {//los parametros pueeden recibir cualquier nombre
        if (true) {
            resolved('Hey!!')//'Hey!!' es el valor que retornara si esta ok la ejecucion
        }
        else {
            reject('Whoops!!')
        }
    })
}

promiseFunction()
    .then(response => console.log(response))//response es el valor que retorna promiseFunction en una correcta ejecucion
    .catch(err => console.log(err))