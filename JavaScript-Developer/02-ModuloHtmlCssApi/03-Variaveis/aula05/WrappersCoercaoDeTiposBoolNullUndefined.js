// Wrappers, Coerção de Tipos, Booleanos, Null e Undefined
// Em JavaScript, existem alguns conceitos importantes relacionados a tipos de dados e valores especiais, como wrappers, coerção de tipos, booleanos, null e undefined. Vamos explorar cada um desses conceitos:

// Wrappers: Em JavaScript, os tipos primitivos (como string, number e boolean) têm objetos wrapper correspondentes (String, Number e Boolean). Esses objetos permitem que você use métodos e propriedades em valores primitivos. Por exemplo, você pode usar o método toUpperCase() em uma string primitiva, e o JavaScript irá automaticamente criar um objeto wrapper para a string para permitir o uso do método.   

// Coerção de Tipos: A coerção de tipos é o processo pelo qual o JavaScript converte automaticamente um valor de um tipo para outro quando necessário. Por exemplo, se você tentar somar uma string e um número, o JavaScript irá converter o número em uma string e concatenar os dois valores. A coerção de tipos pode levar a resultados inesperados, por isso é importante estar ciente de como ela funciona.

// Booleanos: O tipo booleano em JavaScript representa um valor lógico que pode ser verdadeiro (true) ou falso (false). Ele é frequentemente usado em estruturas de controle, como if e while, para tomar decisões com base em condições. Além disso, existem valores "falsy" em JavaScript, que são considerados falsos quando convertidos para booleanos, como 0, "", null, undefined e NaN.

// Null e Undefined: Null é um valor especial que representa a ausência intencional de qualquer valor. Ele é usado para indicar que uma variável não tem um valor válido. Undefined, por outro lado, é o valor padrão de uma variável que foi declarada, mas não inicializada. Ele também pode ser retornado por funções que não possuem uma declaração de retorno ou quando se tenta acessar uma propriedade inexistente de um objeto.

// Em resumo, os wrappers permitem que você use métodos e propriedades em valores primitivos, a coerção de tipos é o processo pelo qual o JavaScript converte automaticamente um valor de um tipo para outro quando necessário, os booleanos representam valores lógicos que podem ser verdadeiros ou falsos, e null e undefined são valores especiais que representam a ausência de valor ou a falta de inicialização. É importante entender esses conceitos para escrever código JavaScript eficaz e evitar erros relacionados a tipos de dados.

// exemplo  de coerção de tipos:
console.log('5' - 2); // 3 
console.log('5' + 2); // '52'
console.log(true + 1);  // 2
console.log(false + 1); // 1
console.log(null + 1); // 1
// console.log(undefined + 1); // NaN

//  exemplo de booleanos:
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// exemplo de null e undefined:
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null 
// console.log(a + 1); // NaN
// console.log(b + 1); // 1

// Em resumo, os wrappers permitem que você use métodos e propriedades em valores primitivos, a coerção de tipos é o processo pelo qual o JavaScript converte automaticamente um valor de um tipo para outro quando necessário, os booleanos representam valores lógicos que podem ser verdadeiros ou falsos, e null e undefined são valores especiais que representam a ausência de valor ou a falta de inicialização. É importante entender esses conceitos para escrever código JavaScript eficaz e evitar erros relacionados a tipos de dados.

//  Em JavaScript, os wrappers são objetos que envolvem os tipos primitivos, como string, number e boolean. Eles permitem que você use métodos e propriedades em valores primitivos. Por exemplo, você pode usar o método toUpperCase() em uma string primitiva, e o JavaScript irá automaticamente criar um objeto wrapper para a string para permitir o uso do método. A coerção de tipos é o processo pelo qual o JavaScript converte automaticamente um valor de um tipo para outro quando necessário. Por exemplo, se você tentar somar uma string e um número, o JavaScript irá converter o número em uma string e concatenar os dois valores. Os booleanos representam valores lógicos que podem ser verdadeiros (true) ou falsos (false). Null é um valor especial que representa a ausência intencional de qualquer valor, enquanto undefined é o valor padrão de uma variável que foi declarada, mas não inicializada. É importante entender esses conceitos para escrever código JavaScript eficaz e evitar erros relacionados a tipos de dados. 
