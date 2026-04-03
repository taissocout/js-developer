/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    // Método para calcular o gasto total da viagem
    calcularGasto(quilometros, precoCombustivel) {
        const gastoTotal = (quilometros * this.gastoMedio) * precoCombustivel;

        console.log(
            `🚗 ${this.marca} (${this.cor}) → Gasto para ${quilometros} km: R$ ${gastoTotal.toFixed(2)}`
        );

        return gastoTotal;
    }

    // Método para comparar com outro carro
    compararGasto(quilometros, precoCombustivel, outroCarro) {
        const gastoAtual = this.calcularGasto(quilometros, precoCombustivel);
        const gastoOutro = outroCarro.calcularGasto(quilometros, precoCombustivel);

        if (gastoAtual < gastoOutro) {
            console.log(`✅ ${this.marca} é mais econômico que ${outroCarro.marca}`);
        } else if (gastoAtual > gastoOutro) {
            console.log(`✅ ${outroCarro.marca} é mais econômico que ${this.marca}`);
        } else {
            console.log(`⚖️ ${this.marca} e ${outroCarro.marca} têm o mesmo gasto`);
        }

        return gastoAtual - gastoOutro;
    }
}

// ==========================
// 🚀 Execução do programa
// ==========================

// ✅ Primeiro cria os objetos
const carro1 = new Carro('Toyota', 'Vermelho', 0.1);
const carro2 = new Carro('Honda', 'Azul', 0.08);

// ✅ Exibe informações básicas
console.log(carro1.marca, carro1.cor);
console.log(carro2.marca, carro2.cor);

// ✅ Calcula gasto individual
carro1.calcularGasto(100, 5.50);
carro2.calcularGasto(150, 5.50);

// ✅ Compara os dois carros
const diferenca = carro1.compararGasto(100, 5.50, carro2);

console.log(`💰 Diferença de gasto: R$ ${diferenca.toFixed(2)}`);