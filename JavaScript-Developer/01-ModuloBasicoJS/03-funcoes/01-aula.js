/*
Vamos criar um programa para calcular o Índice de Massa Corporal (IMC) de uma pessoa.
O IMC é calculado dividindo o peso pela altura ao quadrado.
*/

console.log("🚀 Iniciando programa");

// 1. Função para calcular o IMC
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

// 2. Função para classificar o IMC
function classificarImc(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}

// 3. Função principal autoexecutável (IIFE) MAIN() para calcular e exibir o IMC
(function main(peso, altura) {
    const imc = calcularImc(peso, altura);
    const classificacao = classificarImc(imc);

    console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
})(70, 1.75);

/*
Lógica:
1. Define funções de cálculo e classificação
2. Executa imediatamente a função principal (IIFE)
3. Calcula e exibe o resultado
*/