/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis:
1 - Preço do Etanol
2 - Preço da Gasolina
3 - Tipo de combustível que está no carro
4 - Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

Objetivo: Verificar se o carro é abastecido com Etanol ou Gasolina
e imprimir no console o valor que será gasto para realizar esta viagem. 
E verifique que tipo de combustível ele está usando e imprima se o valor é verdadeiro ou falso usando um if/else
*/

const precoEtanol = 4.50; // Preço do Etanol
const precoGasolina = 5.50; // Preço da Gasolina
const tipoCombustivel = "Gasolina"; // Tipo de combustível que está no carro  
const gastoMedioPorKm = 0.1; // Gasto médio de combustível do carro por KM
const distanciaKm = 670; // Distância em KM da viagem

// Verifica se o tipo de combustível é Etanol ou Gasolina usando um if/else
if (tipoCombustivel === "Etanol") {
    const valorGasto = (distanciaKm * gastoMedioPorKm) * precoEtanol;  // Calcula o valor gasto para realizar a viagem usando Etanol
    console.log(`O valor gasto para realizar a viagem com Etanol é: R$ ${valorGasto.toFixed(2)}`); // Imprime o valor gasto para realizar a viagem com Etanol no console, formatado com 2 casas decimais
} else if (tipoCombustivel === "Gasolina") {
    const valorGasto = (distanciaKm * gastoMedioPorKm) * precoGasolina; // Calcula o valor gasto para realizar a viagem usando Gasolina
    console.log(`O valor gasto para realizar a viagem com Gasolina é: R$ ${valorGasto.toFixed(2)}`); // Imprime o valor gasto para realizar a viagem com Gasolina no console, formatado com 2 casas decimais
} else {
    console.log("Tipo de combustível inválido."); // Imprime uma mensagem de erro caso o tipo de combustível seja inválido
}

console.log(tipoCombustivel === "Etanol" ? "O carro está usando Etanol." : "O carro está usando Gasolina."); // Verifica se o tipo de combustível é Etanol ou Gasolina e imprime no console se o valor é verdadeiro ou falso usando um operador ternário (if/else)

let valorGasto; // Declaração da variável "valorGasto" para armazenar o valor gasto para realizar a viagem
if (tipoCombustivel === "Etanol") {
    valorGasto = (distanciaKm * gastoMedioPorKm) * precoEtanol; // Calcula o valor gasto para realizar a viagem usando Etanol
} else if (tipoCombustivel === "Gasolina") {
    valorGasto = (distanciaKm * gastoMedioPorKm) * precoGasolina; // Calcula o valor gasto para realizar a viagem usando Gasolina
}
console.log(`O valor gasto para realizar a viagem é: R$ ${valorGasto.toFixed(2)}`); // Imprime o valor gasto para realizar a viagem no console, formatado com 2 casas decimais

/* Logica por tras do codigo
precoEtanol = Preço do Etanol
precoGasolina = Preço da Gasolina
tipoCombustivel = Tipo de combustível que está no carro  
gastoMedioPorKm = Gasto médio de combustível do carro por KM
distanciaKm = Distância em KM da viagem
se tipoCombustivel for igual a "Etanol" {
    valorGasto = Calcula o valor gasto para realizar a viagem usando Etanol
    Imprime o valor gasto para realizar a viagem com Etanol no console, formatado com 2 casas decimais
} senão se tipoCombustivel for igual a "Gasolina" {
    valorGasto = Calcula o valor gasto para realizar a viagem usando Gasolina 
    Imprime o valor gasto para realizar a viagem com Gasolina no console, formatado com 2 casas decimais
} senão {
    Imprime uma mensagem de erro caso o tipo de combustível seja inválido
}
Verifica se o tipo de combustível é Etanol ou Gasolina e imprime no console se o valor é verdadeiro ou falso usando um operador ternário (if/else)
valorGasto = Declaração da variável "valorGasto" para armazenar o valor gasto para realizar a viagem
se tipoCombustivel for igual a "Etanol" {
    valorGasto = Calcula o valor gasto para realizar a viagem usando Etanol
} senão se tipoCombustivel for igual a "Gasolina" {
    valorGasto = Calcula o valor gasto para realizar a viagem usando Gasolina
}
Imprime o valor gasto para realizar a viagem no console, formatado com 2 casas decimais
*/