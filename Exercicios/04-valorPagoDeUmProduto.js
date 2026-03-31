/* 
    Valor pago por um produto
    Objetivo:
    - Receber o preço original do produto
    - Calcular o valor pago com desconto de 10%
    - Exibir o valor pago no console
    Lógica:
    1. Recebe o preço original do produto
    2. Calcula o valor do desconto (10% do preço original)
    3. Subtrai o valor do desconto do preço original para obter o valor pago
    4. Exibe o valor pago no console, formatado com 2 casas decimais
*/

// 1. Declaração da variável para o preço original do produto
const precoOriginal = 100;
const desconto = precoOriginal * 0.10; // Calcula o valor do desconto (10% do preço original)
const valorPago = precoOriginal - desconto; // Calcula o valor pago subtraindo o desconto do preço original

// 2. Exibe o valor pago no console, formatado com 2 casas decimais
console.log(`O valor pago pelo produto é: R$ ${valorPago.toFixed(2)}`);

/*
Lógica por trás do código:
1. Recebe o preço original do produto (precoOriginal)
2. Calcula o valor do desconto multiplicando o preço original por 0.10 (10%)
3. Calcula o valor pago subtraindo o desconto do preço original
4. Exibe o valor pago no console, formatado com 2 casas decimais usando toFixed(2)
*/