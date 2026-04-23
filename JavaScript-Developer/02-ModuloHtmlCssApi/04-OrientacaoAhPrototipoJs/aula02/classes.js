
// função construtora para criar objetos do tipo Pessoa.
function Pessoa(nome, idade) {
    // quando temos uma function construtora ganhamos o this. O this é o objeto que está sendo criado, ou seja, a instância do objeto.
    this.nome = nome;
    this.idade = idade;
} 

// podemos invocar atraves do operador New, que é o operador de criação de objetos. Ele cria um novo objeto vazio e depois chama a função construtora, passando o objeto vazio como contexto (this) para a função construtora. Assim, as propriedades nome e idade são adicionadas ao objeto criado.

// vamos usar o prototype para adicionar um método à função construtora Pessoa. O protótipo é um objeto associado a cada função construtora, e os objetos criados a partir dessa função herdam as propriedades e métodos definidos no protótipo.
Pessoa.prototype.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
}

// Criando um novo objeto do tipo Pessoa usando a função construtora
const renan = new Pessoa('Renan', 30);
// O operador new retorna o objeto criado, que é atribuído à variável renan. Agora, renan é um objeto do tipo Pessoa com as propriedades nome e idade definidas.
console.log(renan); // Pessoa { nome: 'Renan', idade: 30 }

renan.apresentar(); // Olá, meu nome é Renan e tenho 30 anos.