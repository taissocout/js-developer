/*
========================================
📘 OBJETIVO DO PROGRAMA
========================================
- Representar pessoas com nome, altura e peso
- Calcular o IMC (Índice de Massa Corporal)
- Classificar o IMC
- Comparar o IMC entre duas pessoas

Fórmula do IMC:
IMC = peso / (altura * altura)
========================================
*/


// ========================================
// 🧱 DEFINIÇÃO DA CLASSE (Molde/Blueprint)
// ========================================
class Pessoa {

    // 📌 Atributos (características da pessoa)
    nome;
    altura;
    peso;

    // 🔧 Construtor: executa quando criamos um objeto
    constructor (nome, altura, peso) {
        this.nome = nome;       // this = objeto atual
        this.altura = altura;   // define altura da pessoa
        this.peso = peso;       // define peso da pessoa
    }

    // ========================================
    // 🧮 MÉTODO: CALCULAR IMC
    // ========================================
    calcularImc () {
        // Fórmula do IMC usando os dados do próprio objeto
        const imc = this.peso / Math.pow(this.altura, 2);

        // Retorna o valor calculado para ser usado depois
        return imc;
    }

    // ========================================
    // 📊 MÉTODO: CLASSIFICAR IMC
    // ========================================
    classificarImc(imc) {

        // Estrutura condicional para classificar o valor
        if (imc < 18.5) {
            console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Abaixo do peso.`);
        
        } else if (imc >= 18.5 && imc < 25) {
            console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Peso normal.`);
        
        } else if (imc >= 25 && imc < 30) {
            console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Sobrepeso.`);
        
        } else {
            console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Obesidade.`);
        }
    }

    // ========================================
    // ⚖️ MÉTODO: COMPARAR IMC ENTRE DUAS PESSOAS
    // ========================================
    compararImc(pessoa) {

        // Calcula o IMC da pessoa atual (this)
        const imcPessoa1 = this.calcularImc();

        // Calcula o IMC da outra pessoa recebida como parâmetro
        const imcPessoa2 = pessoa.calcularImc();

        // Exibe os dois valores
        console.log(`IMC de ${this.nome}: ${imcPessoa1.toFixed(2)}`);
        console.log(`IMC de ${pessoa.nome}: ${imcPessoa2.toFixed(2)}`);

        // Compara os valores
        if (imcPessoa1 < imcPessoa2) {
            console.log(`${this.nome} tem um IMC menor que ${pessoa.nome}.`);
        
        } else if (imcPessoa1 > imcPessoa2) {
            console.log(`${this.nome} tem um IMC maior que ${pessoa.nome}.`);
        
        } else {
            console.log(`${this.nome} e ${pessoa.nome} têm o mesmo IMC.`);
        }
    }
}


// ========================================
// 🚀 EXECUÇÃO DO PROGRAMA
// ========================================

// 🧍 Criando objetos (instâncias da classe Pessoa)
const heitor = new Pessoa('Heitor', 1.81, 86);
const alice = new Pessoa('Alice', 1.65, 68);
const nicolas = new Pessoa('Nicolas', 1.82, 90);


// ========================================
// 🧮 CÁLCULO DOS IMCs INDIVIDUAIS
// ========================================

// Cada objeto chama seu próprio método
const imcHeitor = heitor.calcularImc();
const imcAlice = alice.calcularImc();
const imcNicolas = nicolas.calcularImc();


// ========================================
// 📊 CLASSIFICAÇÃO DOS RESULTADOS
// ========================================

heitor.classificarImc(imcHeitor);
alice.classificarImc(imcAlice);
nicolas.classificarImc(imcNicolas);


// ========================================
// ⚖️ COMPARAÇÃO ENTRE PESSOAS
// ========================================

// Comparando dois a dois
heitor.compararImc(alice);
heitor.compararImc(nicolas);
alice.compararImc(nicolas);