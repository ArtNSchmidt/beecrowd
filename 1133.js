var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)

var a = Number(lines[0])
var b = Number(lines[1])

function solveProblem(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    for (let i = a + 1; i < b; i++) {
        if (i % 5 === 2 || i % 5 === 3) {
            console.log(i);
        }
    }
}

