var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var pi = Math.PI.toFixed(5)
var raio = Number(lines[0])

var volumeEsfera = (raio**3 * pi * (4/3.0))

console.log('VOLUME = ' + volumeEsfera.toFixed(3))