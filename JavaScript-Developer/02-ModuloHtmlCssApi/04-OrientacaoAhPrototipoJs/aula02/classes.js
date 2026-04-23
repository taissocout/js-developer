/********************************************************************
 * CORRIGIDO VIA CHATGPT AGENTE IA
 * ❌ ERRO ORIGINAL
 * 
 * Você comentou a função construtora, mas tentou usar:
 * Pessoa.prototype.apresentar
 * 
 * 👉 Problema:
 * Nesse ponto, "Pessoa" NÃO EXISTE, então quebra com:
 * ReferenceError: Pessoa is not defined
 ********************************************************************/


/********************************************************************
 * ✅ CORREÇÃO 1 — USANDO FUNÇÃO CONSTRUTORA + PROTOTYPE
 ********************************************************************/

// Função construtora (agora NÃO está comentada)
function PessoaFunc(nome, idade) {
    // "this" representa o objeto que será criado pelo "new"
    this.nome = nome;
    this.idade = idade;
}

// Aqui usamos o prototype corretamente,
// pois a função já foi definida acima
PessoaFunc.prototype.apresentar = function () {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

// Criando instância corretamente
const renan = new PessoaFunc('Renan', 30);

console.log(renan); 
// Saída: PessoaFunc { nome: 'Renan', idade: 30 }

renan.apresentar(); 
// Saída: Olá, meu nome é Renan e tenho 30 anos.



/********************************************************************
 * ❌ ERRO ORIGINAL
 * 
 * Você declarou:
 * function Pessoa() {}
 * E depois:
 * class Pessoa {}
 * 
 * 👉 Problema:
 * Conflito de nomes no mesmo escopo
 * (não pode redefinir a mesma entidade)
 ********************************************************************/


/********************************************************************
 * ✅ CORREÇÃO 2 — USANDO CLASS (FORMA MODERNA)
 ********************************************************************/

class Pessoa {
    constructor(nome, idade) {
        // Mesma lógica da função construtora
        this.nome = nome;
        this.idade = idade;
    }

    // Esse método vai automaticamente para o prototype
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Criando nova instância com class
const maria = new Pessoa('Maria', 28);

console.log(maria); 
// Saída: Pessoa { nome: 'Maria', idade: 28 }

maria.apresentar();
// Saída: Olá, meu nome é Maria e tenho 28 anos.



/********************************************************************
 * 🧠 INSIGHT IMPORTANTE (NÍVEL ENTREVISTA)
 * 
 * Essas duas abordagens são equivalentes:
 * 
 * class Pessoa {}
 * 
 * é praticamente o mesmo que:
 * 
 * function Pessoa() {}
 * Pessoa.prototype.metodo = ...
 * 
 * 👉 Ou seja:
 * "class" é apenas açúcar sintático sobre prototype.
 ********************************************************************/