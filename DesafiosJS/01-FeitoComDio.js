const precoCombustivel  = 5.50; // Preço do combustível por litro
const consumoPorKm = 0.1; // Quantidade de litros consumidos por KM
const distanciaKm = 200; // Distância em KM da viagem   

const litrosConsumidos = consumoPorKm * distanciaKm; // Calcula a quantidade total de litros consumidos
const valorGasto = litrosConsumidos * precoCombustivel; // Calcula o valor gasto para a viagem
console.log("O valor gasto para realizar esta viagem é: R$ " + valorGasto.toFixed(2)); // Imprime o valor gasto no console, formatado com 2 casas decimais