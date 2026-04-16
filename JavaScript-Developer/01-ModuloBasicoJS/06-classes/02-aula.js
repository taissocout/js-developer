// Crie uma classe chamada "Pessoa" com as seguintes propriedades: nome, idade e profissão.
// Em seguida, adicione um método chamado "comparacao" que recebe outra pessoa como parâmetro e compara a idade das duas pessoas, retornando uma mensagem indicando quem é mais velho ou se têm a mesma idade.

// 01 - Criar a classe Pessoa com as propriedades nome, idade e profissão
class Pessoa {
    nome;
    idade;

    // 02 - Adicionar o método comparacao para comparar a idade de duas pessoas
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
// 03 - O método comparacao recebe outra pessoa como parâmetro e compara a idade das duas pessoas
    comparacao(pessoa) {
        if (this.idade > pessoa.idade) {
            console.log(`${this.nome} é mais velho(a) que ${pessoa.nome}.`);
            return true;
        } else if (this.idade < pessoa.idade) {
            console.log(`${this.nome} é mais novo(a) que ${pessoa.nome}.`);
            return true;
        } else if (this.idade === pessoa.idade) {
            console.log(`${this.nome} e ${pessoa.nome} têm a mesma idade.`);
            return true;
        } else {
            console.log(`${pessoa2.nome} e ${pessoa1.nome} têm idades diferentes.`);
            return false;
        }
    }
}
// 04 - Criar instâncias da classe Pessoa e comparar suas idades usando o método comparacao
const pessoa1 = new Pessoa('Adão', 35);
const pessoa2 = new Pessoa('Eva', 30);

// 05 - Comparar as idades das duas pessoas usando o método comparacao
pessoa1.comparacao(pessoa2);
pessoa2.comparacao(pessoa1);

/*
Crie uma classe chamada "Pessoa" com as seguintes propriedades: nome, idade e profissão.
Em seguida, adicione um método chamado "comparacao" que recebe outra pessoa como parâmetro e compara a idade das duas pessoas, retornando uma mensagem indicando quem é mais velho ou se têm a mesma idade.
*/