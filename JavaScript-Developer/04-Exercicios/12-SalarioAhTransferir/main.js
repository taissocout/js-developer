const { gets, print } = require('./funcoes.js');

// Lê as entradas: salário bruto e benefícios
const salario = gets();
const beneficios = gets();

// Retorna o percentual de desconto conforme a faixa salarial
function calcularDesconto(salario) {
    if (salario <= 1100) return 0.05;  // até R$1.100 → 5%
    if (salario <= 2500) return 0.10;  // até R$2.500 → 10%
    return 0.15;                        // acima de R$2.500 → 15%
}

// Aplica o desconto sobre o salário e soma os benefícios para obter o total
function calcularSalarioFinal(salario, beneficios) {
    const desconto = calcularDesconto(salario);
    const valorDesconto = salario * desconto;
    const total = (salario - valorDesconto) + beneficios;

    return { desconto, valorDesconto, total };
}

// Exibe o resumo completo do cálculo no console
function exibirResultado(salario, beneficios) {
    const { desconto, valorDesconto, total } = calcularSalarioFinal(salario, beneficios);

    print(`Salário bruto:        R$ ${salario.toFixed(2)}`);
    print(`Desconto aplicado:    ${(desconto * 100).toFixed(0)}% → - R$ ${valorDesconto.toFixed(2)}`);
    print(`Benefícios:           + R$ ${beneficios.toFixed(2)}`);
    print(`-----------------------------------`);
    print(`Salário a transferir: R$ ${total.toFixed(2)}`);
}

exibirResultado(salario, beneficios);