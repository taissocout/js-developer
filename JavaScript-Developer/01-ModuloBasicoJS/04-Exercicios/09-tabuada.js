// const tabuadaDoDois = [];

// tabuadaDoDois.push(1);
// tabuadaDoDois.push(2);
// tabuadaDoDois.push(3);
// tabuadaDoDois.push(4);
// tabuadaDoDois.push(5);
// tabuadaDoDois.push(6);
// tabuadaDoDois.push(7);
// tabuadaDoDois.push(8);
// tabuadaDoDois.push(9);
// tabuadaDoDois.push(10);

// let multiplicar = 2;

// for (let i = 0; i < tabuadaDoDois.length; i++) {
//     let tabuada = multiplicar * tabuadaDoDois[i];
//     console.log(`${multiplicar} x ${tabuadaDoDois[i]} = ${tabuada}`);
// }

console.log("Vamos iniciar a tabuada do 2...\n");
const tabuadaDoDois = [1,2,3,4,5,6,7,8,9,10];
let multiplicarDois = 2;

for (let i = 0; i < tabuadaDoDois.length; i++) {
    let resultado = multiplicarDois * tabuadaDoDois[i];
    console.log(`Tabuada do ${multiplicarDois} X ${tabuadaDoDois[i]} = ${resultado}`);
}

console.log("\nVamos iniciar a tabuada do 3...\n");
const tabuadaDoTres = [1,2,3,4,5,6,7,8,9,10];
let multiplicarTres = 3;

for (let i = 0; i < tabuadaDoTres.length; i++) {
    let resultado = multiplicarTres * tabuadaDoTres[i];
    console.log(`Tabuada do ${multiplicarTres} X ${tabuadaDoTres[i]} = ${resultado}`);
}


console.log("\nVamos iniciar trazendo apenas numeros pares...\n");

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
	const numeroPar = numeros[i];
	if(numeroPar % 2 === 0) {
		console.log(numeroPar)
	}
}