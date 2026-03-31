/*
Vamos criar um programa para calcular o Índice de Massa Corporal (IMC) de uma pessoa. O IMC é calculado dividindo o peso da pessoa (em kg) pela altura ao quadrado (em metros). O programa deve classificar o resultado do IMC em categorias, como "Abaixo do peso", "Peso normal", "Sobrepeso" e "Obesidade".

Objetivo:
- Receber o peso e a altura de uma pessoa
- Calcular o IMC usando a fórmula: IMC = peso / (altura * altura)
- Classificar o resultado do IMC em categorias:
    - Abaixo do peso: IMC < 18.5
    - Peso normal: 18.5 <= IMC < 25
    - Sobrepeso: 25 <= IMC < 30
    - Obesidade: IMC >= 30
*/

// 1. Declaração das variáveis
const peso = 112; // Peso da pessoa em kg
const altura = 1.81; // Altura da pessoa em metros
// 2. Calcular o IMC
const imc = peso / Math.pow(altura, 2); // Fórmula para calcular o IMC
// 3. Classificar o resultado do IMC
if (imc < 18.5) {
    console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Abaixo do peso.`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Peso normal.`);
} else if (imc >= 25 && imc < 30) {
    console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Sobrepeso.`);
} else {
    console.log(`O IMC é ${imc.toFixed(2)}. Classificação: Obesidade.`);
}
/*
Lógica por trás do código:
1. Recebe o peso e a altura da pessoa
2. Calcula o IMC usando a fórmula: IMC = peso / (altura * altura)
3. Usa estruturas condicionais if/else para classificar o resultado do IMC:
    - imc < 18.5 => Abaixo do peso
    - 18.5 <= imc < 25 => Peso normal
    - 25 <= imc < 30 => Sobrepeso
    - imc >= 30 => Obesidade
4. Imprime o resultado do IMC formatado com 2 casas decimais e a classificação correspondente
*/  
