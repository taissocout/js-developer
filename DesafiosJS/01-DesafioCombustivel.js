// Faca Um programa para calcular o valor de uma viagem.

// Voce terá 2 variáveis. sendo elas:
// - Preço do combustível por litro;
// - Quantidade de litros consumidos por KM;
// - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

var precoCombustivel = 5.50; // Preço do combustível por litro
var consumoPorKm = 0.1; // Quantidade de litros consumidos por KM
var distanciaKm = 200; // Distância em KM da viagem

var litrosConsumidos = consumoPorKm * distanciaKm; // Calcula a quantidade total de litros consumidos
var valorgasto = litrosConsumidos * precoCombustivel; // Calcula o valor gasto para a viagem

console.log("O valor gasto para realizar esta viagem é: R$ " + valorgasto.toFixed(2)); // Imprime o valor gasto no console, formatado com 2 casas decimais
