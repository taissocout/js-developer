/*
Programa para calcular o preço final de um produto com base
na forma de pagamento (desconto ou juros).

Objetivo:
- Aplicar desconto para pagamento à vista
- Aplicar juros para pagamento no crédito parcelado
- Exibir valor total e valor por parcela (se houver)
*/

console.log("🚀 Iniciando programa");

// 1. Criar produto
function criarProduto(nome, preco, formaDePagamento) {
    return { nome, preco, formaDePagamento };
}

// 2. Calcular preço final (desconto ou juros)
function calcularPrecoFinal(preco, formaDePagamento) {
    // Descontos
    if (formaDePagamento === 1) return preco * 0.9;  // débito (10% OFF)
    if (formaDePagamento === 2) return preco * 0.85; // PIX/dinheiro (15% OFF)

    // Juros (crédito)
    if (formaDePagamento === 3) return preco * 1.05; // 3x
    if (formaDePagamento === 5) return preco * 1.10; // 5x
    if (formaDePagamento === 12) return preco * 1.20; // 12x

    return preco;
}

// 3. Definir parcelas
function obterParcelas(formaDePagamento) {
    if (formaDePagamento === 3) return 3;
    if (formaDePagamento === 5) return 5;
    if (formaDePagamento === 12) return 12;
    return 1;
}

// 4. Exibir resultado
function exibirResultado(produto, precoFinal, parcelas) {
    const valorParcela = precoFinal / parcelas;

    if (parcelas > 1) {
        console.log(
            `Produto: ${produto.nome}\n` +
            `Preço original: R$${produto.preco}\n\n` +
            `Pagamento no crédito em ${parcelas}x\n` +
            `Total com juros: R$${precoFinal.toFixed(2)}\n` +
            `Parcela: R$${valorParcela.toFixed(2)}`
        );
    } else {
        let tipoPagamento = "";

        if (produto.formaDePagamento === 1) tipoPagamento = "Débito (10% de desconto)";
        else if (produto.formaDePagamento === 2) tipoPagamento = "PIX/Dinheiro (15% de desconto)";
        else tipoPagamento = "Pagamento padrão";

        console.log(
            `Produto: ${produto.nome}\n` +
            `Preço original: R$${produto.preco}\n\n` +
            `Forma de pagamento: ${tipoPagamento}\n` +
            `Valor final: R$${precoFinal.toFixed(2)}`
        );
    }
}

// 5. Função principal
function main(nome, preco, formaDePagamento) {
    const produto = criarProduto(nome, preco, formaDePagamento);
    const precoFinal = calcularPrecoFinal(produto.preco, produto.formaDePagamento);
    const parcelas = obterParcelas(produto.formaDePagamento);

    exibirResultado(produto, precoFinal, parcelas);
}

// 6. Execução
/*
Formas de pagamento:
1 = débito
2 = PIX/dinheiro
3 = crédito 3x
5 = crédito 5x
12 = crédito 12x
*/

main('PlayStation 5', 4500, 5);

/*
Lógica:
1. Criamos o produto
2. Aplicamos desconto ou juros dependendo da forma de pagamento
3. Definimos se há parcelamento
4. Calculamos valor total e parcelas
5. Exibimos o resultado

Benefícios:
- Código modular
- Fácil manutenção
- Simula um sistema real de pagamento
*/