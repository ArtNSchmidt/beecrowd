var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = Number(lines[0]);
var B = Number(lines[1]);
var C = Number(lines[2]);

var MaiorAB = ((A + B) + Math.abs (A-B)) / 2
var maiorvalor = ((MaiorAB + C) + Math.abs ((MaiorAB - C))) / 2

console.log(maiorvalor +  ' eh o maior') 