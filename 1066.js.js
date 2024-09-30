var input = require('fs').readFileSync('stdin', 'utf8');
var numeros = input.split('\n').map(Number)

var cPar = 0
var cImpar = 0 
var cPos = 0
var cNeg = 0 

for (let i = 0; i < 5; i++){
    if(numeros[i] % 2 == 0){
        cPar++
    } if (numeros[i] % 2 != 0){
        cImpar++
    } if(numeros[i] > 0){
        cPos++
    }if(numeros[i] < 0){
        cNeg++
    }
}

    console.log(`${cPar} valor(es) par(es) `)
    console.log(`${cImpar} valor(es) impar(es) `)
    console.log(`${cPos} valor(es) positivo(s) `)
    console.log(`${cNeg} valor(es) negativo(s) `)
    


