const { gets, print } = require('./funcoes.js');

function calcularDesconto(salario) {
    let desconto;

    if (salario <= 1100) {
        desconto = 0.05;
    } else if (salario <= 2500) {
        desconto = 0.10;
    } else {
        desconto = 0.15;
    }

    return desconto;
}

function calcularSalarioFinal(salario, beneficios) {
    const desconto = calcularDesconto(salario);
    const valorDesconto = salario * desconto;
    const total = (salario - valorDesconto) + beneficios;

    return { desconto, valorDesconto, total };
}

function exibirResultado(salario, beneficios) {
    const { desconto, valorDesconto, total } = calcularSalarioFinal(salario, beneficios);

    print(`Salário bruto:        R$ ${salario.toFixed(2)}`);
    print(`Desconto aplicado:    ${(desconto * 100).toFixed(0)}% → - R$ ${valorDesconto.toFixed(2)}`);
    print(`Benefícios:           + R$ ${beneficios.toFixed(2)}`);
    print(`-----------------------------------`);
    print(`Salário a transferir: R$ ${total.toFixed(2)}`);
}

const salario = gets();
const beneficios = gets();

exibirResultado(salario, beneficios);