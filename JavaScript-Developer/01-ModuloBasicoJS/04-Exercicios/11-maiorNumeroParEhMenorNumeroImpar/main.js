// Importa as funções gets (lê entrada) e print (exibe saída) do arquivo auxiliar
const { gets, print } = require('./funcao.js');

// Inicializa o maior par com -Infinity para garantir que qualquer número par
// encontrado será necessariamente maior que esse valor inicial
let maiorPar = -Infinity;

// Inicializa o menor ímpar com Infinity para garantir que qualquer número ímpar
// encontrado será necessariamente menor que esse valor inicial
let menorImpar = Infinity;

// Lê 5 números do usuário, um por vez
for (let i = 0; i < 5; i++) {
    const n = gets(); // Lê o próximo número da entrada

    // Verifica se o número é par (resto da divisão por 2 é 0)
    // e se é maior que o maior par encontrado até agora
    if (n % 2 === 0 && n > maiorPar) {
        maiorPar = n; // Atualiza o maior par
    }

    // Verifica se o número é ímpar (resto da divisão por 2 é diferente de 0)
    // e se é menor que o menor ímpar encontrado até agora
    if (n % 2 !== 0 && n < menorImpar) {
        menorImpar = n; // Atualiza o menor ímpar
    }
}

// Exibe os resultados finais após processar todos os 5 números
print(`Maior número par: ${maiorPar}`);
print(`Menor número ímpar: ${menorImpar}`);
