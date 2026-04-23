// Prototype em JavaScript é um mecanismo pelo qual objetos podem herdar 
// propriedades e métodos de outros objetos.

// Objeto base (protótipo)
const pessoa = {
    nome: 'João',
    idade: 30,
}

console.log(pessoa.nome); // Output: João
console.log(pessoa.idade); // Output: 30

// Adicionando nova propriedade ao protótipo
pessoa.sexo = 'Masculino';

console.log(pessoa); // Output: { nome: 'João', idade: 30, sexo: 'Masculino' }

// Criando um novo objeto que herda do protótipo "pessoa" - Método 1: Object.create()
const estudante = Object.create(pessoa);

console.log(estudante.nome); // Output: João (herdado)
console.log(estudante.idade); // Output: 30 (herdado)
console.log(estudante.sexo); // Output: Masculino (herdado)

console.log(estudante); // Output: { __proto__: { nome: 'João', idade: 30, sexo: 'Masculino' } }

// Método 2: Usando __proto__ (não recomendado em produção)
const renan = {
    nome: 'Renan',
    idade: 25,
    __proto__: pessoa
}

console.log(renan); // Output: { nome: 'Renan', idade: 25, __proto__: { ... } }
console.log(renan.nome); // Output: Renan (própria)
console.log(renan.idade); // Output: 25 (própria)
console.log(renan.sexo); // Output: Masculino (herdado)

// Método 1 novamente: Object.create() com sobrescrita
const maria = Object.create(pessoa);
maria.nome = 'Maria';
maria.idade = 28; 

console.log(maria); // Output: { nome: 'Maria', idade: 28, __proto__: { ... } }
console.log(maria.nome); // Output: Maria (própria)
console.log(maria.idade); // Output: 28 (própria)
console.log(maria.sexo); // Output: Masculino (herdado)

// Mais um exemplo com sobrescrita
const carlos = Object.create(pessoa);
carlos.nome = 'Carlos';
carlos.idade = 35;

console.log(carlos); // Output: { nome: 'Carlos', idade: 35, __proto__: { ... } }
console.log(carlos.nome); // Output: Carlos
console.log(carlos.idade); // Output: 35
console.log(carlos.sexo); // Output: Masculino (herdado)

// Verificando a cadeia de protótipos
console.log(estudante.__proto__ === pessoa); // true
console.log(renan.__proto__ === pessoa); // true
console.log(maria.__proto__ === pessoa); // true

// resumindo: O protótipo é uma forma de compartilhar propriedades e métodos entre objetos. Ele permite que objetos herdem características de outros objetos, promovendo a reutilização de código e a criação de hierarquias de objetos.