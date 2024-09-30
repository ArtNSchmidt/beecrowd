var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = Number(lines[0])
var b = Number(lines[1])
var produto = a * b

console.log('PROD = ' + produto) 