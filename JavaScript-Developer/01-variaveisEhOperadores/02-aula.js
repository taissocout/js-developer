// O que é uma estutura condicional?
// Estruturas condicionais são blocos de código que permitem executar diferentes ações com base em condições específicas. Elas são usadas para tomar decisões e controlar o fluxo do programa. As principais estruturas condicionais em JavaScript são: if, else if, else, switch, operador ternário (condicional) e operador lógico (&&, ||). Essas estruturas permitem que o programa execute diferentes blocos de código dependendo do resultado de uma expressão ou condição, tornando o código mais flexível e adaptável a diferentes situações. Por exemplo, usando uma estrutura condicional if, podemos verificar se um número é positivo, negativo ou zero e executar ações diferentes para cada caso.

// Exemplo de estrutura condicional if-else
const numero = 10; // Declaração de uma variável chamada "numero" e atribuição do valor 10 a ela
if (numero > 0) // Verifica se o valor da variável "numero" é maior que 0
{
    console.log("O número é positivo.");
}
else if (numero < 0) // Verifica se o valor da variável "numero" é menor que 0
{
    console.log("O número é negativo.");
}
else  // Se o valor da variável "numero" não for maior que 0 nem menor que 0, ou seja, se for igual a 0
{
    console.log("O número é zero.");
}

// Exemplo de estrutura condicional if-else
const numero2 = -5;
if (numero2 > 0) // Verifica se o valor da variável "numero2" é maior que 0
{
    console.log("O número é positivo.");
}
else if (numero2 < 0) // Verifica se o valor da variável "numero2" é menor que 0
{
    console.log("O número é negativo.");
}
else // Se o valor da variável "numero2" não for maior que 0 nem menor que 0, ou seja, se for igual a 0
{
    console.log("O número é zero.");
}

// Vamos verificar se é Par ou Impar
// Declaração de uma variável chamada "numero3" e atribuição do valor 3 a ela
const numero3 = 3;
// Verifica se o número é par usando o operador de módulo (%) para verificar se o resto da divisão por 2 é igual a 0
// Se a variável "ehPar" for verdadeira, ou seja, se o número for par, o código dentro do bloco if será executado, imprimindo "O número é par." no console. Caso contrário, se a variável "ehPar" for falsa, ou seja, se o número for ímpar, o código dentro do bloco else será executado, imprimindo "O número é ímpar." no console.
const ehPar = numero3 % 2 === 0;
if (ehPar) {
    console.log("O número é par.");
}
else {
    console.log("O número é ímpar."); // Se a variável "ehPar" for falsa, ou seja, se o número for ímpar
}

// Observação numero3 % 2 === 0 é um booleano que verifica se o número é par, ou seja, se o resto da divisão por 2 é igual a 0. Se for verdadeiro, a variável "ehPar" será verdadeira, indicando que o número é par. Caso contrário, a variável "ehPar" será falsa, indicando que o número é ímpar.

/* Logica por tras do codigo
ehPar =  Verifica se o número é par, ou seja, se o resto da divisão por 2 é igual a 0
se ehPar for verdadeiro (true) {
    Imprime "O número é par."
} senão {
    Imprime "O número é ímpar."
}
*/

const numero4 = 15;
const numeroDivisivelPor5 = numero4 % 5 === 0; // Verifica se o número é divisível por 5 usando o operador de módulo (%) para verificar se o resto da divisão por 5 é igual a 0
if (numeroDivisivelPor5) // Se a variável "numeroDivisivelPor5" for verdadeira, ou seja, se o número for divisível por 5, o código dentro do bloco if será executado, imprimindo "O número é divisível por 5." no console. Caso contrário, se a variável "numeroDivisivelPor5" for falsa, ou seja, se o número não for divisível por 5, o código dentro do bloco else será executado, imprimindo "O número não é divisível por 5." no console.
{
    console.log("O número é divisível por 5.");
} else {
    console.log("O número não é divisível por 5.");
}

/* Vamos colocar mais um if para que ele leia o numero de 0a 100 mas ele verifica se o numero é valido ou não, ou seja, se o numero é menor que 0 ou maior que 100 ele vai imprimir "Número inválido" caso contrário ele vai imprimir "Número válido"
*/
const numero5 = 0;
const numeroDivisivel1por5 = (numero5 % 5) === 0; // Verifica se o número é divisível por 5 usando o operador de módulo (%) para verificar se o resto da divisão por 5 é igual a 0

// Verifica se o número é válido, ou seja, se é menor que 0 ou maior que 100
if (numero5 === 0) {
    console.log("O número é inválido.");
} else if (numeroDivisive1por5) {
    console.log("O número é divisível por 5.");
}
else {
    console.log("O número não é divisível por 5.");
}

/* Logica por tras do codigo
numeroDivisive1por5 = Verifica se o número é divisível por 5 usando o operador de módulo (%)
 para verificar se o resto da divisão por 5 é igual a 0 
se numero5 for igual a 0 {
    Imprime "O número é inválido."
} senão se numeroDivisive1por5 for verdadeiro {
    Imprime "O número é divisível por 5." 
} senão {
    Imprime "O número não é divisível por 5."
}
*/