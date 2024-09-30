var input = require('fs').readFileSync('stdin', 'utf8');
var [a,b] = input.split(' ').map(item => Number(item))

//var nota1 = Number(lines[0]) * 3.5
//var nota2 = Number(lines[1]) * 7.5
//var mdia = (nota1 + nota2) / 11

var media = (a * 3.5 + b * 7.5) / 11

console.log(`MEDIA = ${media.toFixed(5)}` )
