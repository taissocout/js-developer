/*
Programa para calcular o valor a ser pago com base na forma de pagamento

Objetivo:
- Aplicar desconto ou juros dependendo da condição de pagamento escolhida
- Formas de pagamento:
    - débito => 10% de desconto
    - dinheiro/pix => 15% de desconto
    - duas vezes => preço normal
    - acima de duas vezes => 10% de juros
- Exibir o valor final formatado com 2 casas decimais
*/

// 1. Declaração das variáveis
const precoEtiqueta = 100;       // Preço normal do produto
const descontoDebito = 0.10;     // 10% de desconto no débito
const descontoDinheiroPix = 0.15;// 15% de desconto em dinheiro ou pix
const jurosAcimaDuasVezes = 0.10;// 10% de juros para parcelamento acima de duas vezes

// 2. Condição de pagamento escolhida
// Pode ser: "debito", "dinheiro", "pix", "duas vezes", "acima de duas vezes"
const condicaoPagamento = "pix"; // exemplo

// 3. Cálculo do valor final
let valorPago;

if (condicaoPagamento === "debito") {
    valorPago = precoEtiqueta * (1 - descontoDebito); // Aplica desconto de 10%
} else if (condicaoPagamento === "dinheiro" || condicaoPagamento === "pix") {
    valorPago = precoEtiqueta * (1 - descontoDinheiroPix); // Aplica desconto de 15%
} else if (condicaoPagamento === "duas vezes") {
    valorPago = precoEtiqueta; // Preço normal sem juros
} else if (condicaoPagamento === "acima de duas vezes") {
    valorPago = precoEtiqueta * (1 + jurosAcimaDuasVezes); // Aplica juros de 10%
} else {
    console.log("Condição de pagamento inválida.");
}

// 4. Exibe o valor final, apenas se valorPago estiver definido
if (valorPago !== undefined) {
    console.log(`O valor a ser pago é: R$ ${valorPago.toFixed(2)}`);
}

/*
Lógica por trás do código:
1. Define o preço normal do produto e as taxas de desconto/juros para cada forma de pagamento.
2. Recebe a condição de pagamento escolhida pelo usuário.
3. Usa estruturas condicionais if/else para calcular o valor final:
    - débito => aplica 10% de desconto
    - dinheiro ou pix => aplica 15% de desconto
    - duas vezes => preço normal
    - acima de duas vezes => aplica 10% de juros
    - condição inválida => exibe mensagem de erro
4. Exibe o valor final formatado com duas casas decimais.
*/