const { gets, print } = require('./funcoes.js');

const salario = gets();
const beneficios = gets();

let valorDesconto;
let salarioAhTransferir;

if (salario <= 1100) {
    valorDesconto = salario * 0.05;
    salarioAhTransferir = (salario - valorDesconto) + beneficios;
    print(`Salário bruto:        R$ ${salario.toFixed(2)}`);
    print(`Desconto aplicado:    5% → - R$ ${valorDesconto.toFixed(2)}`);
} else if (salario <= 2500) {
    valorDesconto = salario * 0.10;
    salarioAhTransferir = (salario - valorDesconto) + beneficios;
    print(`Salário bruto:        R$ ${salario.toFixed(2)}`);
    print(`Desconto aplicado:    10% → - R$ ${valorDesconto.toFixed(2)}`);
} else {
    valorDesconto = salario * 0.15;
    salarioAhTransferir = (salario - valorDesconto) + beneficios;
    print(`Salário bruto:        R$ ${salario.toFixed(2)}`);
    print(`Desconto aplicado:    15% → - R$ ${valorDesconto.toFixed(2)}`);
}

print(`Benefícios:           + R$ ${beneficios.toFixed(2)}`);
print(`-----------------------------------`);
print(`Salário a transferir: R$ ${salarioAhTransferir.toFixed(2)}`);