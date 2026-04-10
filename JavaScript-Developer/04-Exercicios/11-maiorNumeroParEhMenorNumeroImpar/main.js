const { gets, print } = require('./funcao.js');

// Inicializando corretamente
let maiorPar = -Infinity;
let menorImpar = Infinity;

// Loop baseado na quantidade de entradas (5)
for (let i = 0; i < 5; i++) {
    const n = gets();     // ✔️ pega apenas um número por vez

    if (n % 2 === 0 && n > maiorPar) maiorPar = n;
    if (n % 2 !== 0 && n < menorImpar) menorImpar = n;
}

print(`Maior número par: ${maiorPar}`);
print(`Menor número ímpar: ${menorImpar}`);