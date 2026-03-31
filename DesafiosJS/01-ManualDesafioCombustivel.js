var tanqueDoCarro = 50; // Capacidade do tanque do carro em litros
var precoCombustivel = 5.50; // Preço do combustível por litro
var distanciaKm = 1500; // Distância em KM da viagem
var kmPorLitros = 17; // Quantidade de litros consumidos por KM

// conversão
var litrosPorKm = 1 / kmPorLitros; // litros consumidos por KM, ou seja, quantos litros são necessários para percorrer 1 KM

// cálculo
var litrosConsumidos = litrosPorKm * distanciaKm; // Calcula a quantidade total de litros consumidos para percorrer a distância da viagem
var valorGasto = litrosConsumidos * precoCombustivel; // Calcula o valor gasto para a viagem multiplicando a quantidade de litros consumidos pelo preço do combustível por litro
var tanquesNecessarios = Math.ceil(litrosConsumidos / tanqueDoCarro); // Calcula o número de tanques necessários para a viagem dividindo a quantidade total de litros consumidos pela capacidade do tanque do carro e arredondando para cima usando Math.ceil() para garantir que seja suficiente para a viagem

console.log("O valor gasto é: R$ " + valorGasto.toFixed(2)); // Imprime o valor gasto no console, formatado com 2 casas decimais usando toFixed(2)
console.log("Tanques necessários: " + tanquesNecessarios); // Imprime o número de tanques necessários no console. O resultado é arredondado para cima usando Math.ceil() para garantir que seja suficiente para a viagem, mesmo que a quantidade de litros consumidos seja um número decimal.g