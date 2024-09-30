var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x1y1 = lines.shift().split(" ")
var x2y2 = lines.shift().split(" ")

var x1 = x1y1.shift()
var y1 = x1y1.shift()
var x2 = x2y2.shift()
var y2 = x2y2.shift()

var distancia = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2-y1,2))

console.log(distancia.toFixed(4))