var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let N =  parseInt(input)
console.log(N)

var notas = parseInt ( N / 100)
console.log(`${notas} nota(s) de R$ 100,00`)
N = N % 100

notas =parseInt( N / 50)
console.log(`${notas} nota(s) de R$ 50,00`)
N = N % 50

notas = parseInt( N / 20)
console.log(`${notas} nota(s) de R$ 20,00`)
N = N % 20

notas = parseInt(N / 10)
console.log(`${notas} nota(s) de R$ 10,00`)
N = N % 10

notas = parseInt(N / 5)
console.log(`${notas} nota(s) de R$ 5,00`)
N = N % 5

notas = parseInt(N / 2)
console.log(`${notas} nota(s) de R$ 2,00`)
N = N % 2

notas = parseInt(N / 1)
console.log(`${notas} nota(s) de R$ 1,00`)
N = N % 1
