// Importa as funções gets (lê entrada) e print (exibe saída) do arquivo auxiliar
const { gets, print } = require('./funcoes.js');

// Lê as duas entradas: salário bruto e valor dos benefícios
const salario = gets();
const beneficios = gets();

// Função responsável por determinar o percentual de desconto
// com base na faixa salarial — recebe o salário e retorna o desconto correto
function calcularDesconto(salario) {
    let desconto;

    // Verifica em qual faixa o salário se enquadra e atribui o desconto correspondente
    if (salario <= 1100) {
        desconto = 0.05;        // Faixa 1: até R$1.100 → 5% de desconto
    } else if (salario <= 2500) {
        desconto = 0.10;        // Faixa 2: até R$2.500 → 10% de desconto
    } else {
        desconto = 0.15;        // Faixa 3: acima de R$2.500 → 15% de desconto
    }

    return desconto; // Retorna o percentual para ser usado no cálculo
}

// Função responsável por realizar os cálculos do salário final
// Chama calcularDesconto para obter o percentual, depois aplica o desconto e soma os benefícios
function calcularSalarioFinal(salario, beneficios) {
    const desconto = calcularDesconto(salario);     // Busca o percentual de desconto
    const valorDesconto = salario * desconto;        // Calcula o valor a ser descontado
    const total = (salario - valorDesconto) + beneficios; // Salário líquido + benefícios

    return { desconto, valorDesconto, total }; // Retorna os três valores para exibição
}

// Função responsável por exibir o resumo completo no console
// Desestrutura o objeto retornado por calcularSalarioFinal e imprime cada linha
function exibirResultado(salario, beneficios) {
    const { desconto, valorDesconto, total } = calcularSalarioFinal(salario, beneficios);

    print(`Salário bruto:        R$ ${salario.toFixed(2)}`);
    print(`Desconto aplicado:    ${(desconto * 100).toFixed(0)}% → - R$ ${valorDesconto.toFixed(2)}`);
    print(`Benefícios:           + R$ ${beneficios.toFixed(2)}`);
    print(`-----------------------------------`);
    print(`Salário a transferir: R$ ${total.toFixed(2)}`);
}

// Ponto de entrada do programa — dispara toda a execução passando salário e benefícios
exibirResultado(salario, beneficios);