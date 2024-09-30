var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vet = new Array(10);                //new Array(10): Cria um novo array vet com 10 posições.

var x=parseInt(lines.shift());          //lines.shift(): Remove e retorna o primeiro elemento do array lines, que é o valor inicial x, convertido para um número inteiro usando parseInt.

for (let i = 0; i <= 50; i++)
{
    vet[i]=parseInt(x);                     //Atribui o valor de x convertido para inteiro na posição i do vetor vet.
    console.log(`N[${i}] = ${vet[i]}`); 
           //Imprime o valor do elemento vet[i] no formato N[i] = valor.
    x=x*2;                                  //Multiplica o valor de x por 2 para a próxima iteração.
}