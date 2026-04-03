class Pessoa { // ✅ Boa prática: nome da classe com letra maiúscula
    nome;
    altura;
    peso;

    constructor (nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc () {
        const imc = this.peso / Math.pow(this.altura, 2);
        return imc;
    }

    classificarImc(imc) {
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

    compararImc(pessoa) {

        const imcPessoa1 = this.calcularImc();
        const imcPessoa2 = pessoa.calcularImc();

        console.log(`IMC de ${this.nome}: ${imcPessoa1.toFixed(2)}`);
        console.log(`IMC de ${pessoa.nome}: ${imcPessoa2.toFixed(2)}`);

        if (imcPessoa1 < imcPessoa2) {
            console.log(`${this.nome} tem um IMC menor que ${pessoa.nome}.`);
        }
        else if (imcPessoa1 > imcPessoa2) {
            console.log(`${this.nome} tem um IMC maior que ${pessoa.nome}.`);
        }
        else {
            console.log(`${this.nome} e ${pessoa.nome} têm o mesmo IMC.`);
        }
    }
} 


const heitor = new Pessoa('Heitor', 1.81, 86);
const alice = new Pessoa('Alice', 1.65, 68);
const nicolas = new Pessoa('Nicolas', 1.82, 90);


const imcHeitor = heitor.calcularImc();
const imcAlice = alice.calcularImc();
const imcNicolas = nicolas.calcularImc();

heitor.classificarImc(imcHeitor);
alice.classificarImc(imcAlice);
nicolas.classificarImc(imcNicolas);

heitor.compararImc(alice);
heitor.compararImc(nicolas);
alice.compararImc(nicolas);