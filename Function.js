let input = require("fs").readFileSync("stdin", "utf8");
var n = Number(input)
var area = areaCirculo(n)

console.log(`A =${area.toFixed(4)}`)



function areaCirculo(raio){
    const PI = 3.14159
    return PI * Math.pow(raio, 2)

}


