var input = require('fs').readFileSync('stdin', 'utf8');
var numeros = input.split('\n').map(Number)

var cPar = 0

for (let i = 0; i > numeros.length; i++){
    if(numeros[i] % 2 == 0){
        cPar++
    }
}
console.log(`${cPar} valores pares` )

