/* 
Programa para calcular o valor de uma viagem
Objetivo: 
- Verificar o tipo de combustível do carro (Etanol ou Gasolina)
- Calcular o valor gasto na viagem com base no gasto médio e distância
- Informar no console o valor gasto e o tipo de combustível
*/

// 1. Declaração das variáveis
const precoEtanol = 4.50;          // Preço do Etanol por litro
const precoGasolina = 5.50;        // Preço da Gasolina por litro
const gastoMedioPorKm = 0.1;       // Gasto médio do carro em litros por KM
const distanciaKm = 670;           // Distância da viagem em KM
const tipoCombustivel = "Gasolina"; // Tipo de combustível do carro  

// 2. Calcular o valor gasto baseado no tipo de combustível
let valorGasto;
if (tipoCombustivel === "Etanol") {
    valorGasto = (distanciaKm * gastoMedioPorKm) * precoEtanol;
} else if (tipoCombustivel === "Gasolina") {
    valorGasto = (distanciaKm * gastoMedioPorKm) * precoGasolina;
} else {
    console.log("Tipo de combustível inválido."); // Caso o combustível não seja Etanol nem Gasolina
}

// 3. Exibir o valor gasto da viagem
if (valorGasto) { // Verifica se o cálculo foi realizado
    console.log(`O valor gasto para realizar a viagem é: R$ ${valorGasto.toFixed(2)}`);
}

// 4. Repetição intencional: informar novamente o valor gasto conforme o combustível
if (tipoCombustivel === "Etanol") {
    const valorGastoEtanol = (distanciaKm * gastoMedioPorKm) * precoEtanol; // Recalcula o valor gasto
    console.log(`O carro está usando Etanol. Valor gasto: R$ ${valorGastoEtanol.toFixed(2)}`);
} else if (tipoCombustivel === "Gasolina") {
    const valorGastoGasolina = (distanciaKm * gastoMedioPorKm) * precoGasolina; // Recalcula o valor gasto
    console.log(`O carro está usando Gasolina. Valor gasto: R$ ${valorGastoGasolina.toFixed(2)}`);
} else {
    console.log("Tipo de combustível inválido."); // Caso o combustível não seja Etanol nem Gasolina
}

/* 
Lógica por trás do código:

1. Verifica o tipo de combustível:
   - Se for "Etanol", calcula o valor gasto multiplicando distância, gasto médio e preço do Etanol
   - Se for "Gasolina", calcula o valor gasto multiplicando distância, gasto médio e preço da Gasolina
   - Se não for nenhum dos dois, imprime "Tipo de combustível inválido"

2. Exibe o valor gasto da viagem, formatado com 2 casas decimais

3. Repetição intencional do cálculo e impressão do valor gasto, separando por tipo de combustível
   - Serve para aprendizado e reforço do fluxo condicional
*/