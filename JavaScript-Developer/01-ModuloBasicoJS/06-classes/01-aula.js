// Aula 01 - Classes
/*
Vamos criar uma classe chamada "Pessoa" com as seguintes propriedades: nome, idade e profissão.
Em seguida, adicione um método chamado "descrever" que retorna uma string descrevendo a pessoa com suas propriedades.
*/

// 01 - Criar a classe Pessoa com as propriedades nome, idade e profissão
class Pessoa {
    nome;
    idade;
    profissao;
    anoDeNascimento;
// 02 - Adicionar o método descrever para retornar uma string descrevendo a pessoa com suas propriedades
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.anoDeNascimento = new Date().getFullYear() - idade; // Calcula o ano de nascimento com base na idade
    }
// 
    descrever() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e sou um ${this.profissao}.`;
    }
}


// 03 - Criar instâncias da classe Pessoa e chamar o método descrever para exibir as descrições das pessoas
const taisso = new Pessoa('Taisso', 35, 'Desenvolvedor');
console.log(taisso.descrever());

// 04 - Criar outra instância da classe Pessoa e chamar o método descrever para exibir a descrição da nova pessoa
const jupira = new Pessoa('Jupira', 30, 'Designer');
console.log(jupira.descrever());

//  
console.log(taisso);
console.log(jupira);
    

/*
Vamos criar uma classe chamada "Pessoa" com as seguintes propriedades: nome, idade e profissão.
Em seguida, adicione um método chamado "comparacao" que recebe outra pessoa como parâmetro e compara a idade das duas pessoas, retornando uma mensagem indicando quem é mais velho ou se têm a mesma idade.
*/