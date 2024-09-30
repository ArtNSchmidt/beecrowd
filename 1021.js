var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const [reais, centavos] = lines.shift().trim().split('.').map(Number);
let valor = 100 * reais + centavos;

const notas = [10000, 5000, 2000, 1000, 500, 200];
const moedas = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");
for (let nota of notas) {
  console.log(`${Math.floor(valor / nota).toFixed(0)} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
  valor %= nota;
}

console.log("MOEDAS:");
for (let moeda of moedas) {
  console.log(`${Math.floor(valor / moeda).toFixed(0)} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
  valor %= moeda;
}
