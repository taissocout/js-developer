const { gets, print } = require('./funcao.js');

const media = gets();

if (media < 5) {

    console.log(`O aluno foi reprovado com média ${media.toFixed(2)}.`);

} else if (media >= 5 && media < 7) {

    console.log(`O aluno está de recuperação com média ${media.toFixed(2)}.`);

} else {

    console.log(`O aluno foi aprovado com média ${media.toFixed(2)}.`);
}

print(media);
