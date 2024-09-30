
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');


const pi = Math.PI.toFixed(5);

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var areaTRI = (A * C) / 2
var areaCIR = pi * C**2
var areaTRAP = (A + B) * C / 2
var areaQUA = B**2
var areaRET = A * B

console.log('TRIANGULO: ' + areaTRI.toFixed(3));
console.log('CIRCULO: ' + areaCIR.toFixed(3));
console.log('TRAPEZIO: ' + areaTRAP.toFixed(3));
console.log('QUADRADO: ' + areaQUA.toFixed(3));
console.log('RETANGULO: ' + areaRET.toFixed(3));

