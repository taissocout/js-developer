const tanqueDoCarro = 50; // Capacidade do tanque do carro em litros
const kmPorLitros = 17; // Quantidade de quilômetros por litro
let precoCombustivel = 5.50; // Preço do combustível por litro
let distanciaKm = 1500; // Distância em KM da viagem

// conversão
const litrosPorKm = 1 / kmPorLitros; // litros consumidos por KM, ou seja, quantos litros são necessários para percorrer 1 KM

// cálculo
const litrosConsumidos = litrosPorKm * distanciaKm; // Calcula a quantidade total de litros consumidos para percorrer a distância da viagem
const valorGasto = litrosConsumidos * precoCombustivel; // Calcula o valor gasto para a viagem multiplicando a quantidade de litros consumidos pelo preço do combustível por litro
const tanquesNecessarios = Math.ceil(litrosConsumidos / tanqueDoCarro); // Calcula o número de tanques necessários para a viagem dividindo a quantidade total de litros consumidos pela capacidade do tanque do carro e arredondando para cima usando Math.ceil() para garantir que seja suficiente para a viagem

console.log("O valor gasto é: R$ " + valorGasto.toFixed(2)); // Imprime o valor gasto no console, formatado com 2 casas decimais usando toFixed(2)
console.log("Tanques necessários: " + tanquesNecessarios); // Imprime o número de tanques necessários no console