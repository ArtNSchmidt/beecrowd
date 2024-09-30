var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distancia = lines[0];
var distanciaXtempo = distancia * 2


console.log(distanciaXtempo + ' minutos')