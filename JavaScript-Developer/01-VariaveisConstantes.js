// Variáveis e Constantes

// ->  no JS temos 2 formas de declarar variáveis: var e let
// ->  var é a forma antiga de declarar variáveis, e let é a forma mais moderna e recomendada
// ->  var tem escopo global ou de função, enquanto let tem escopo de bloco

let vativel = "Eu sou uma variável let";
console.log(vativel); // Output: Eu sou uma variável

vativel = "Eu sou uma variável let atualizada";
console.log(vativel); // Output: Eu sou uma variável atualizada

var variavel2 = "Eu sou uma variável var";
console.log(variavel2); // Output: Eu sou uma variável var
variavel2 = "Eu sou uma variável var atualizada";
console.log(variavel2); // Output: Eu sou uma variável var atualizada


console.log("Olá, mundo!");

// -> Variaveis e tipos de operadores
// ->  no JS temos 3 tipos de operadores: aritméticos, de comparação e lógicos
// ->  os operadores aritméticos são: +, -, *, /, %

let num10 = 10;
let num20 = 20;

console.log("Aqui Estamos Somando", num10 + num20); // logs with automatic spacing // Output: 30 - Aqui estamos usando o operador de adição para somar os valores das variáveis num10 e num20, resultando em 30.
console.log("Aqui estamos Subtraindo", num10 - num20); // Output: 10 - Aqui estamos usando o operador de subtração para subtrair o valor da variável num20 do valor da variável num10, resultando em -10.
console.log("Aqui estamos Multiplicando",num10 * num20); // Output: 200 - Aqui estamos usando o operador de multiplicação para multiplicar os valores das variáveis num10 e num20, resultando em 200.
console.log("Aqui estamos Dividindo",num10 / num20); // Output: 0.5 - Aqui estamos usando o operador de divisão para dividir o valor da variável num10 pelo valor da variável num20, resultando em 0.5.
console.log("Aqui estamos com o resto",num10 % num20); // Output: 10 - Aqui estamos usando o operador de módulo para obter o resto da divisão do valor da variável num10 pelo valor da variável num20, resultando em 10.

