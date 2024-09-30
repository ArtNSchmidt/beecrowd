var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var n1 = Number(lines[0]);
var n2 = Number(lines[1]);
var n3 = Number(lines[2]);
var n4 = Number(lines[3]);
var dif = n1 * n2 - n3 * n4



console.log("DIFERENÇA = " + dif);
