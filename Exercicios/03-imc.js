/*
Vamos criar um programa para calcular o preço final de um produto considerando o desconto baseado na forma de pagamento.

Objetivo:
- Receber o preço do produto
- Receber a forma de pagamento (1 = débito, 2 = dinheiro ou PIX)
- Aplicar o desconto correto:
    - Débito: 10% de desconto
    - Dinheiro ou PIX: 15% de desconto
- Informar ao usuário o valor final a ser pago
*/

// 1. Declaração das variáveis
const precoEtiqueta = 100; // Preço original do produto
const formaDePagamento = 2; // 1 = débito, 2 = dinheiro ou PIX
const descontoDebito = 0.1; // 10% de desconto para débito
const descontoDinheiroPix = 0.15; // 15% de desconto para dinheiro ou PIX

// 2. Definir booleanos para identificar o tipo de pagamento
const ehDebito = (formaDePagamento === 1);
const ehDinheiroOuPix = (formaDePagamento === 2);

// 3. Aplicar a lógica de desconto e imprimir o valor final
if (ehDebito) {
    // Caso pagamento seja débito
    console.log(`O desconto foi de 10% e você pagou R$ ${precoEtiqueta * (1 - descontoDebito)}`);
} else if (ehDinheiroOuPix) {
    // Caso pagamento seja dinheiro ou PIX
    console.log(`O desconto foi de 15% e você pagou R$ ${precoEtiqueta * (1 - descontoDinheiroPix)}`);
} else {
    // Caso forma de pagamento inválida ou sem desconto
    console.log(`Forma de pagamento inválida ou sem desconto. Você pagará R$ ${precoEtiqueta}`);
}

/*
Lógica por trás do código:
1. Recebe o preço do produto e a forma de pagamento
2. Usa booleanos para identificar se é débito ou dinheiro/PIX
3. Usa estruturas condicionais if/else para aplicar o desconto correspondente:
    - ehDebito = true => desconto de 10%
    - ehDinheiroOuPix = true => desconto de 15%
    - Caso contrário, sem desconto
4. Calcula o valor final subtraindo o desconto e imprime no console
*/