// ==============================
// Escopo: Cálculo de preço final com desconto baseado na forma de pagamento
// ==============================

// Declaração de variáveis
const precoEtiqueta = 100; // Preço original do produto
const formaDePagamento = 2; // 1 = débito, 2 = dinheiro ou PIX
const descontoDebito = 0.1; // 10% de desconto para débito
const descontoDinheiroPix = 0.15; // 15% de desconto para dinheiro ou PIX

// ==============================
// Lógica: Verificação da forma de pagamento
// ==============================

// Booleanos para identificar o tipo de pagamento
const ehDebito = (formaDePagamento === 1);
const ehDinheiroOuPix = (formaDePagamento === 2);

// Cálculo do preço final e exibição da mensagem
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

// ==============================
// Fim da lógica
// ==============================