var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var Tempo = lines[0];          //horas
var Velocidade = lines[1];     //km/hr
const consumo = 12             //km/l


var distancia = Velocidade * Tempo 
var litros = distancia / consumo

console.log(litros.toFixed(3));





