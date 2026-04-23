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


// Tambem vamos ver os tipos de dados, Numbers, String e Symbol e suas diferentes formas de declaração, como literais, construtores e funções. Os tipos de dados são fundamentais em JavaScript, e cada um tem suas próprias características e usos.

// Numbers: O tipo de dado Number em JavaScript representa valores numéricos, incluindo inteiros e números de ponto flutuante. Você pode declarar um número usando literais, como 42 ou 3.14, ou usando o construtor Number(), como new Number(42). Os números em JavaScript são baseados no padrão IEEE 754, o que significa que eles têm uma precisão limitada e podem apresentar problemas de arredondamento em algumas operações. 

// Strings: O tipo de dado String em JavaScript representa uma sequência de caracteres. Você pode declarar uma string usando literais, como "Hello, World!" ou 'Hello, World!', ou usando o construtor String(), como new String("Hello, World!"). As strings em JavaScript são imutáveis, o que significa que uma vez criadas, elas não podem ser alteradas. No entanto, você pode criar novas strings a partir de strings existentes usando métodos como concat() ou slice().

// Symbol: O tipo de dado Symbol em JavaScript representa um valor único e imutável. Ele é usado principalmente para criar identificadores únicos para propriedades de objetos. Você pode criar um símbolo usando a função Symbol(), como Symbol('description'). Cada vez que você chama Symbol(), ele retorna um valor único, mesmo que a descrição seja a mesma. Os símbolos são úteis para evitar conflitos de nomes em objetos e para criar propriedades que não podem ser acessadas acidentalmente por outros códigos.

// Em resumo, os tipos de dados em JavaScript incluem Numbers, Strings e Symbols, cada um com suas próprias características e formas de declaração. Os números representam valores numéricos, as strings representam sequências de caracteres e os símbolos representam valores únicos e imutáveis usados para criar identificadores únicos para propriedades de objetos. É importante entender esses tipos de dados para escrever código JavaScript eficaz e evitar erros relacionados a tipos de dados.

// exemplo de Numbers:
let num1 = 42;
let num2 = new Number(3.14);
console.log(num1); // 42
console.log(num2); // [Number: 3.14] 

// exemplo de Strings:
let str1 = "Hello, World!";
let str2 = new String("Hello, World!");
console.log(str1); // "Hello, World!"
console.log(str2); // [String: 'Hello, World!']

// exemplo de Symbols:
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1); // Symbol(description)
console.log(sym2); // Symbol(description)
console.log(sym1 === sym2); // false, pois cada símbolo é único

//  Em resumo, os wrappers permitem que você use métodos e propriedades em valores primitivos, a coerção de tipos é o processo pelo qual o JavaScript converte automaticamente um valor de um tipo para outro quando necessário, os booleanos representam valores lógicos que podem ser verdadeiros ou falsos, e null e undefined são valores especiais que representam a ausência de valor ou a falta de inicialização. Além disso, os tipos de dados em JavaScript incluem Numbers, Strings e Symbols, cada um com suas próprias características e formas de declaração. É importante entender esses conceitos para escrever código JavaScript eficaz e evitar erros relacionados a tipos de dados.


