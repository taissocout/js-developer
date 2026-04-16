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

const salarioAhTransferir = (salario - (salario * desconto)) + beneficios;

print(`Salário a transferir: R$ ${salarioAhTransferir.toFixed(2)}`);