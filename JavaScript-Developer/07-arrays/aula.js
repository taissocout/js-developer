// const familia = ['Pai = Taisso', 'Mãe = Jenifer', '1ª Filha = Alice', '2º Filho = Heitor', '3º Filho = Nicolas'];

// familia.push('Avó Paterna = Tereza');

// console.log(familia[5]);

// familia[6] = 'Avó Materna = Bah';
 
// console.log(familia.pop());

// console.log(familia);



// Listas e estrutura de repetição basica

const notas = [];


notas.push(3);
notas.push(5);
notas.push(8);
notas.push(4);
notas.push(9);
notas.push(3);
notas.push(7);
notas.push(9);

let soma = 0;
for (let i =0; i < notas.length; i++) {
	soma += notas[i];
}

const media = soma / notas.length;

console.log(media.toFixed(2))

// const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5] + notas[6];

// console.log(soma / 7);



/* 
Estrutura for loop
for (let i = 0; i < 10; i++) {
	console.log(i)
}
*/

// const nome = 'Taisso Junior Coutinho '

// for (let i = 0; i < nome.length; i++){
// 	console.log(nome[i]);
// }

// Outra forma de pedir a lista em loop declarando uma constante dentro do for
// const nome = 'Jenifer Patricia da Silva Coutinho';

// for (let i = 0; i < nome.length; i++) {
// 	const jenny = nome[i];
// 	console.log(jenny);
// }

