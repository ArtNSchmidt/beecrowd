var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let TDias =  parseInt(lines.shift())


let TAnos =  TDias / 365
TDias = TDias % 365

let TMeses = TDias / 30
TDias = TDias % 30

let qdtDias = TDias


console.log(`${Math.floor(TAnos)} ano(s)`)
console.log(`${Math.floor(TMeses)} mes(es)`)
console.log(`${Math.floor(qdtDias)} dia(s)`)

