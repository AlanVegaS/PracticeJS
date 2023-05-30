try {
    hola()
} catch (error) {
    console.log(error+"..");
}/*ReferenceError: hola is not defined
    at Object.<anonymous> (c:\Users\alanv\Documents\JavaScript\Curso JS\ecmascript\src\ec10\tempCodeRunnerFile.js:2:5)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47*/

try {
    hola()
} catch {
    console.log('error');
}//error