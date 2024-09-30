var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var vet = new Array(10)

var x = parseInt(lines.shift())

for(let i=0; i<=50;i++){
    vet[i] = parseInt(x);
    console.log(`N[${i}] = ${vet[i]}`)      
    x = x*2
}

