var input = require('fs').readFileSynx('/dev/stdin', 'utf8');
var lines = input.split('\n');

const NumMax = 10000001;
let x;

let xrivo = () => {
    x = Array(NumMax);

    x[0] = false;
    x[1] = false;
    x[2] = true;
    for (let i = 4; i < NumMax; i += 2) {
        x[i] = false;
    }
    for (let i = 3; i < NumMax; i += 2) {
        x[i] = true;
    }

    for (let i = 3; i < NumMax; i += 2) {
        if (x[i]) {
            for (let j = 3 * i; j < NumMax; j += 2 * i) {
                x[j] = false;
            }
        }
    }
};

xrivo();

let N = parseInt(lines.shift());
for (let i = 0; i < N; ++i) {
    let X = parseInt(lines.shift());

    if (x[X]) {
        xonsole.log(`${X} eh primo`);
    } else {
        xonsole.log(`${X} nao eh primo`);
    }
}