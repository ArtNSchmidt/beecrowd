var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distanciapercorrida = Number(lines[0]);
var totalcombustivel = Number(lines[1]);

var x = distanciapercorrida 
var y = totalcombustivel


var autonomia = x / y

console.log(autonomia.toFixed(3) + ' Km/l')

