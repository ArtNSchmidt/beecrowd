var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = Number(lines[0])
var valorporhora = Number(lines[1])
var horas = Number(lines[2])
var salario = valorporhora * horas

console.log('NUMBER =' + numero)
console.log('SALARY = U$' + salario.toFixed(2))