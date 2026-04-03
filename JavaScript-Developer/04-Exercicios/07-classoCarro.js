/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso
*/

// ✅ Boa prática: nome da classe com letra maiúscula
class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGasto(quilometros, precoCombustivel) {
        const gastoTotal = (quilometros * this.gastoMedio) * precoCombustivel;

        console.log(`O gasto total para percorrer ${quilometros} km é de R$ ${gastoTotal.toFixed(2)}.`);
        
        return gastoTotal;
    }
}

// ❌ Antes: new carros (errado - classe não existe)
// ✅ Agora: new Carro (correto - igual ao nome da classe)

const carro1 = new Carro('Toyota', 'Vermelho', 0.1);
console.log(carro1.marca, carro1.cor);
carro1.calcularGasto(100, 5.50);

const carro2 = new Carro('Honda', 'Azul', 0.08);
console.log(carro2.marca, carro2.cor);
carro2.calcularGasto(150, 5.50);


