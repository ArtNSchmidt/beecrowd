var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let totalSegundos =  parseInt(lines[0])

let qtdHora = totalSegundos / 3600
totalSegundos = totalSegundos % 3600

let qtdMinutos = totalSegundos / 60
totalSegundos = totalSegundos % 60


let qtdSegundos = totalSegundos

console.log(`${Math.floor(qtdHora)}:${Math.floor(qtdMinutos)}:${Math.floor(qtdSegundos)}`)
