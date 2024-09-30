var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nome =lines[0];
var salario = Number(lines[1]);
var vendas =Number(lines[2]);
var comissao = (15 / 100) * vendas 
var total = (salario + comissao)

console.log("TOTAL = R$ " + total.toFixed(2));


