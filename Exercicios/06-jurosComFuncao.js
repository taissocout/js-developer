// Vamos desmembrar o codigo abaixo e colocar a logica de desconto em uma funcao, para deixar o codigo mais organizado e reutilizavel

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

function criarProduto(nome, preco, formaDePagamento) {
    return {
        nome: nome,
        preco: preco,
        formaDePagamento: formaDePagamento
    };
}

function aplicarDesconto(preco, formaDePagamento) {
    const descontoDebito = 0.1; // 10% de desconto para débito
    const descontoDinheiroPix = 0.15; // 15% de desconto para dinheiro ou PIX
    if (formaDePagamento === 1) {
        return preco * (1 - descontoDebito); // Aplica desconto de 10%
    } else if (formaDePagamento === 2) {
        return preco * (1 - descontoDinheiroPix); // Aplica desconto de 15%
    } else {
        return preco; // Sem desconto para formas de pagamento inválidas
    }
}



function main(nome, preco, formaDePagamento) {
    const produto = criarProduto(nome, preco, formaDePagamento);
    const precoFinal = aplicarDesconto(produto.preco, produto.formaDePagamento);
    if (formaDePagamento === 1) {
        console.log(`A ${produto.nome} estava custando apenas R$${produto.preco}\n\nMas nós conseguimos te dar um desconto de 10%\n\nPor pagar no Debito e você vai pagar apenas\nR$${precoFinal}`);
    } else if (formaDePagamento === 2) {
        console.log(`A ${produto.nome} estava custando apenas R$${produto.preco}\n\nMas nós conseguimos te dar um desconto de 15%\n\nPor pagar no Dinheiro ou PIX e você vai pagar apenas\nR$${precoFinal}`);
    } else {
        console.log(`Forma de pagamento inválida ou sem desconto. Você pagará\nR$ ${precoFinal}`);
    }
}

main('Camiseta', 100, 1); // Exemplo de uso da função principal


/*Lógica por trás do código:
1. Criamos uma função criarProduto para encapsular a criação de um objeto produto com nome, preço e forma de pagamento.
2. Criamos uma função aplicarDesconto que recebe o preço e a forma de pagamento, e retorna o preço final aplicando o desconto correto.
3. A função main chama criarProduto para criar um produto e depois chama aplicarDesconto para calcular o preço final, imprimindo o resultado no console.
4. Isso torna o código mais organizado, modular e reutilizável, permitindo que possamos criar diferentes produtos e calcular seus preços finais facilmente.
*/
