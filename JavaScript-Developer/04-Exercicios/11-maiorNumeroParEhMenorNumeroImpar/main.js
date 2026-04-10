const { gets, print } = require('./funcao.js');

// Inicializando variáveis de controle

// Começa com o menor valor possível
// Qualquer número par será maior que isso
let maiorPar = -Infinity;

// Começa com o maior valor possível
// Qualquer número ímpar será menor que isso
let menorImpar = Infinity;


// Loop vai rodar 5 vezes (porque temos 5 entradas)
for (let i = 0; i < 5; i++) {

    // 🔹 Pegando um número da lista (entrada simulada)
    const n = gets();

    // 🧠 DEBUG:
    // "Qual número eu peguei agora?"
    // Exemplo: 5, depois 3, depois 4, etc.

    // =========================
    // 🔍 VERIFICAÇÃO DE PAR
    // =========================
    if (n % 2 === 0 && n > maiorPar) {

        // 🧠 DEBUG:
        // "Esse número é par?"
        // "Ele é maior que o maiorPar atual?"

        // Se sim, atualiza o maior número par encontrado
        maiorPar = n;

        // 🧠 DEBUG:
        // "Atualizei o maiorPar para esse novo valor"
    }


    // =========================
    // 🔍 VERIFICAÇÃO DE ÍMPAR
    // =========================
    if (n % 2 !== 0 && n < menorImpar) {

        // 🧠 DEBUG:
        // "Esse número é ímpar?"
        // "Ele é menor que o menorImpar atual?"

        // Se sim, atualiza o menor número ímpar encontrado
        menorImpar = n;

        // 🧠 DEBUG:
        // "Atualizei o menorImpar para esse novo valor"
    }
}


// =========================
// 📤 SAÍDA FINAL
// =========================

// 🧠 DEBUG FINAL:
// "Depois de percorrer todos os números, qual foi o maior par encontrado?"
print(`Maior número par: ${maiorPar}`);

// 🧠 DEBUG FINAL:
// "Qual foi o menor número ímpar encontrado?"
print(`Menor número ímpar: ${menorImpar}`); 