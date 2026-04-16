/*
 Objeto literal abre chaves {}
const pessoa = {
    nome: 'Taisso', // Propriedade nome com valor 'Taisso'
    idade: 35, // Propriedade idade com valor 35
    profissao: 'Desenvolvedor', // Propriedade profissao com valor 'Desenvolvedor'
}

console.log(pessoa); // Exibe o objeto pessoa no console
console.log(pessoa.nome); // Exibe o valor da propriedade nome do objeto pessoa
console.log(pessoa.idade);
console.log(pessoa.profissao);

// Uma vez que fazemos uma incrementação podemos declarar uma nova propriedade

// Adicionando nova propriedade ao objeto pessoa
pessoa.cidade = 'São Paulo'; // Adiciona a propriedade cidade com valor 'São Paulo' ao objeto pessoa
console.log(pessoa); // Exibe o objeto pessoa atualizado no console

// Podemos deletar uma propriedade do objeto

//  Deletando a propriedade idade do objeto pessoa
delete pessoa.idade; // Deleta a propriedade idade do objeto pessoa
console.log(pessoa); // Exibe o objeto pessoa atualizado no console, sem a propriedade idade
*/

// Uma função dentro de um objeto é chamada de método
const pessoa = {
    nome: 'Taisso',
    idade: 35,
    profissao: 'Desenvolvedor',
    saudacao: function () {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} e eu sou um ${this.profissao}.`);
    }
}

// pessoa.saudacao = function() {
//     console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e eu sou um ${this.profissao}.`);
// } // Atualiza o método saudacao do objeto pessoa para uma nova função que exibe uma mensagem de saudação com as propriedades do objeto

/*
Só descomentar se retirar pessoa.saudacao = function 
pessoa.nome = 'Jupira'; // Atualiza o valor da propriedade nome do objeto pessoa para 'Jupira'
pessoa.idade = 30; // Atualiza o valor da propriedade idade do objeto pessoa para 30
pessoa.profissao = 'Designer'; // Atualiza o valor da propriedade profissao do objeto pessoa para 'Designer'

pessoa.saudacao();
*/

// Vamos agora criar um atributo da pessoa e chamar via console.log
const atributo = 'profissao'; // Declaração da variável atributo com o valor 'profissao'
console.log(pessoa[atributo]); // Acessa a propriedade do objeto pessoa usando a notação de colchetes e exibe o valor da propriedade profissao no console

console.log(pessoa['nome']); // Acessa a propriedade nome do objeto pessoa usando a notação de colchetes e exibe o valor da propriedade nome no console































// Função principal
// function main(nome, idade, profissao) {
//     const pessoa = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao,
//         saudacao: function () {
//             console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.profissao}.`);
//         }
//     };

//     pessoa.saudacao(); // chama corretamente
// }

// // Execução correta
// main('Taisso', 35, 'Desenvolvedor');