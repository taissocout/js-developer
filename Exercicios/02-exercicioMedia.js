/* 
Programa para calcular a média de um aluno e verificar aprovação

Objetivo:
- Receber três notas do aluno
- Calcular a média das notas
- Verificar se o aluno foi:
  - Reprovado (média <= 5)
  - Em recuperação (média > 5 e < 7)
  - Aprovado (média >= 7)
*/

// 1. Declaração das variáveis
const nota1 = 2.5; // Primeira nota do aluno
const nota2 = 8.0; // Segunda nota do aluno
const nota3 = 6.5; // Terceira nota do aluno

// 2. Calcular a média das notas
const media = (nota1 + nota2 + nota3) / 3; // Soma todas as notas e divide por 3

// 3. Verificar situação do aluno com base na média
if (media <= 5) {
    // Se a média for menor ou igual a 5, o aluno foi reprovado
    console.log(`O aluno foi reprovado com média ${media.toFixed(2)}.`);
} else if (media > 5 && media < 7) {
    // Se a média estiver entre 5 e 7, o aluno está em recuperação
    console.log(`O aluno está de recuperação com média ${media.toFixed(2)}.`);
} else {
    // Se a média for maior ou igual a 7, o aluno foi aprovado
    console.log(`O aluno foi aprovado com média ${media.toFixed(2)}.`);
}

/* 
Lógica por trás do código:
- Recebe as três notas
- Calcula a média aritmética
- Usa estruturas condicionais if/else para determinar a situação:
  - media <= 5 => reprovado
  - 5 < media < 7 => recuperação
  - media >= 7 => aprovado
- Imprime o resultado formatado com 2 casas decimais
*/