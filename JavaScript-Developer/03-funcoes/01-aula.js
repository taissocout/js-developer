console.log("Iniciando programa"); // Teste para verificar se o console.log está funcionando corretamente

//Vamos criar um programa para calcular o Índice de Massa Corporal (IMC) de uma pessoa. O IMC é calculado dividindo o peso da pessoa (em kg) pela altura ao quadrado (em metros). O programa deve classificar o resultado do IMC em categorias, como "Abaixo do peso", "Peso normal", "Sobrepeso" e "Obesidade".

//Objetivo:
//- Receber o peso e a altura de uma pessoa
//- Calcular o IMC usando a fórmula: IMC = peso / (altura * altura)
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
} // Função para calcular o IMC usando a fórmula: IMC = peso / (altura * altura)

// Função para classificar o resultado do IMC em categorias
function classificarImc(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
}// Função para classificar o resultado do IMC em categorias

// Função principal para calcular e classificar o IMC, e imprimir o resultado no console
function main(peso, altura) {
    const imc = calcularImc(peso, altura);
    const classificacao = classificarImc(imc);

    console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
}// Função principal para calcular e classificar o IMC, e imprimir o resultado no console

main(70, 1.75); // Chamada da função principal com peso e altura de exemplo para calcular o IMC e exibir a classificação correspondente