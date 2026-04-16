// Lista fixa de entradas (simulando input)
const entradas = [5, 50, 10, 98, 23];
let i = 0;

// Função que retorna um número por vez
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

// Função que imprime no console
function print(texto) {
    console.log(texto);
}

// Exportando as funções
module.exports = { gets, print };