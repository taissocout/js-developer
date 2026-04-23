// teste();

// function teste() {
//     console.log('Teste');
// }

// Variáveis são espaços na memória para armazenar dados.
// Para criar uma variável, usamos a palavra-chave var, let ou const, seguida do nome da variável e do valor que queremos atribuir a ela.

// diferença de var, let e const:
// var: é a forma mais antiga de declarar variáveis. Ela tem escopo global ou de função, o que pode levar a problemas de escopo e hoisting.
// let: é a forma mais moderna de declarar variáveis. Ela tem escopo de bloco, o que significa que só existe dentro do bloco onde foi declarada.
// const: é usada para declarar constantes, ou seja, valores que não podem ser reatribuídos. Ela também tem escopo de bloco.

// vamos explicar o que é hoisting: é um comportamento do JavaScript onde as declarações de variáveis e funções são "elevadas" para o topo do seu escopo antes da execução do código. Isso significa que você pode usar uma variável ou função antes de declará-la, mas isso pode levar a resultados inesperados, especialmente com var.

// Exemplo de hoisting com var:
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';

// Exemplo de escopo com let e const:
if (true) {
    let blockScopedVar = 'I am block scoped';
    const blockScopedConst = 'I am also block scoped';
    console.log(blockScopedVar); // I am block scoped   
    console.log(blockScopedConst); // I am also block scoped
}
// console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
// console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined

// Então podemos deduzir que hoisting é um comportamento do JavaScript onde as declarações de variáveis e funções são "elevadas" para o topo do seu escopo antes da execução do código. Isso significa que você pode usar uma variável ou função antes de declará-la, mas isso pode levar a resultados inesperados, especialmente com var. Já o escopo é a área onde uma variável ou função é acessível. Variáveis declaradas com var têm escopo global ou de função, enquanto variáveis declaradas com let e const têm escopo de bloco.