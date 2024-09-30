var input = require('fs').readFileSync("stdin", "utf8");

var [freq, media] = input.split('\n').map(item => Number(item))

if (media >= 7) {
        console.log('aprovado por média')
    if (freq >= 75) {
    } else
        console.log("reprovado por faltas")

}else 
        console.log("reprovado por média")

        
        