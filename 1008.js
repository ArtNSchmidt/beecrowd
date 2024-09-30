var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = Number(lines[0])
var horas = Number(lines[1])
var valorporhora = Number(lines[2])
var salario = horas * valorporhora

console.log("NUMBER = " +numero)
console.log("SALARY = U$ " +salario.toFixed(2))