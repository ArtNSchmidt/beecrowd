var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nota1 = Number(lines[0]) 
var nota2 = Number(lines[1]) 
var nota3 = Number(lines[2]) 
var media = (((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10)

console.log("MEDIA = "+ media.toFixed(1));


