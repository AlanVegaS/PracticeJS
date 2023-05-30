const button = document.getElementById('button')

button.addEventListener('click', async function () {//dinamic import permite cargar de forma dinamica los modulos, con async await
    const module = await import('./module.js')
    module.functionModule()
})