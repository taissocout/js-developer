const entradas = [2500.01, 943]; // Simulando as entradas: salário bruto e benefícios
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
