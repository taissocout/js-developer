const { gets, print } = require('./funcao.js');

const media = gets();

if (media < 5) {

    console.log(`O aluno foi reprovado com média ${media.toFixed(1)}.`);

} else if (media >= 5 && media < 7) {

    console.log(`O aluno está de recuperação com média ${media.toFixed(1)}.`);

} else if (media >= 7 && media <= 10) {

    console.log(`O aluno está de aprovado com média ${media.toFixed(1)}.`);

} else {

    console.log(`Dados invalidos, as notas não correspondem a média do aluno.`);
}

print(media);
