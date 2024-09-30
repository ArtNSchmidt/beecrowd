var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//12 1 5.30

var totalValores1 = lines.shift().split(" ")
var totalValores2 = lines.shift().split(" ")


var codpeca1 = totalValores1.shift();
var numpeca1 = totalValores1.shift();
var valorunit1 = totalValores1.shift();
valortotal1 = valorunit1 * numpeca1;

var codpeca2 = totalValores2.shift();
var numpeca2 = totalValores2.shift();
var valorunit2 = totalValores2.shift();
valortotal2 = valorunit2 * numpeca2;

let  = totalAPagar = valortotal1 + valortotal2

console.log("VALOR A PAGAR: R$ " + totalAPagar.toFixed(2));





