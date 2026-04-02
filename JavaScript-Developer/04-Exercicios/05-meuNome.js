// Exercício 05 - Meu Nome e sou maior de idade
/*
Vamos criar um programa que exibe o nome de uma pessoa e verifica se ela é maior de idade.
Objetivo:
- Criar uma função para exibir o nome da pessoa
- Criar uma função para verificar se a pessoa é maior de idade (18 anos ou mais)
- Chamar as funções no programa principal (main) para exibir o nome e a idade
*/

console.log("Exercício 05 - Meu Nome e sou maior de idade"); // Título do exercício
console.log("Iniciando programa..."); // Mensagem de início do programa

//01 - Função para exibir o nome da pessoa
function meuNome(nome) {
    console.log(`Meu nome é ${nome}`);
    return nome;
}

// 02 - Função para verificar se a pessoa é maior de idade
function maiorDeIdade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
    return idade;
}

// 03 - Função principal (main) para chamar as funções de nome e idade
function main(nome, idade) {
    meuNome(nome); // apenas chama, sem redeclarar
    maiorDeIdade(idade); // apenas chama, sem redeclarar
}

// 04 - Chamar a função principal (main) com o nome e idade desejados
main('Taisso', 35);