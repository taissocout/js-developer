// Importa as funções do módulo externo
// gets() -> simula entrada de dados
// print() -> exibe no console
const { gets, print } = require('./funcoesDaAula.js');

// Variável que armazena o maior valor encontrado até o momento
// ⚠️ Pode ser melhor iniciar com -Infinity (explico abaixo)
let maiorValorEncontrado = 0;

// Loop que executa 5 vezes (quantidade de entradas esperadas)
for (let i = 0; i < 5; i++) {

    // Pega o próximo número da função gets()
    const numeroSorteado = gets();

    // Verifica se o número atual é maior que o maior já encontrado
    if (numeroSorteado > maiorValorEncontrado) {

        // Se for maior, atualiza a variável
        maiorValorEncontrado = numeroSorteado;
    }
}

// Exibe o maior valor encontrado
print(maiorValorEncontrado);