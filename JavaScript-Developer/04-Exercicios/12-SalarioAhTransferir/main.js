const { gets, print } = require('./funcoes.js');

const salario = gets();
const beneficios = gets();

let desconto;

if (salario <= 1100) {
    desconto = 0.05;
} else if (salario <= 2500) {
    desconto = 0.10;
} else {
    desconto = 0.15;
}

const valorDesconto = salario * desconto;
const salarioAhTransferir = (salario - valorDesconto) + beneficios;

print(`Salário bruto:        R$ ${salario.toFixed(2)}`);
print(`Desconto aplicado:    ${(desconto * 100).toFixed(0)}% → - R$ ${valorDesconto.toFixed(2)}`);
print(`Benefícios:           + R$ ${beneficios.toFixed(2)}`);
print(`-----------------------------------`);
print(`Salário a transferir: R$ ${salarioAhTransferir.toFixed(2)}`);