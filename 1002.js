var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var raio = parseFloat(input) ;
var area = 3.14159 * raio ** 2 ;

console.log("A=" + area.toFixed (4)) ;