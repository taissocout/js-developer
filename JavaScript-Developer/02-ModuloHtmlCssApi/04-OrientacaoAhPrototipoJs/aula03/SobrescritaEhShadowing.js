/********************************************************************
 * ✅ CORRIGIDO COM IA (VERSÃO LIMPA E DIDÁTICA)
 * 
 * Objetivo:
 * Demonstrar diferença entre:
 * - Shadowing em PROTÓTIPO
 * - Shadowing em ESCOPO
 ********************************************************************/


/********************************************************************
 * 🔹 1. SHADOWING EM PROTÓTIPO
 ********************************************************************/

const pessoa = {
    idade: 30,
};

// Criando objeto que herda de "pessoa"
const renan = {
    nome: 'Renan',
    idade: 25, // sobrescreve o valor do protótipo
    __proto__: pessoa,
};

console.log('\n=== SHADOWING EM PROTÓTIPO ===');

console.log('Nome:', renan.nome); 
// Renan (propriedade própria)

console.log('Idade (objeto):', renan.idade); 
// 25 (shadowing)

console.log('Idade (protótipo):', pessoa.idade); 
// 30 (não foi alterado)


/********************************************************************
 * 🔹 2. ERRO COMUM (NÃO É SHADOWING)
 ********************************************************************/

console.log('\n=== ERRO COMUM (VARIÁVEL ≠ OBJETO) ===');

function exemploErrado() {
    const pessoa1 = {
        nome: 'João',
        idade: 30,
    };

    const idade = 40; // variável local

    console.log('Idade do objeto:', pessoa1.idade);
    // continua 30
}

exemploErrado();


/********************************************************************
 * 🔹 3. SHADOWING EM ESCOPO
 ********************************************************************/

console.log('\n=== SHADOWING EM ESCOPO ===');

function exemploShadowing() {
    const idade = 40;

    function interna() {
        const idade = 20; // shadowing
        console.log('Idade (interna):', idade); // 20
    }

    interna();

    console.log('Idade (externa):', idade); // 40
}

exemploShadowing();


/********************************************************************
 * 🔹 4. BOA PRÁTICA (SEM __proto__)
 ********************************************************************/

console.log('\n=== BOA PRÁTICA (Object.create) ===');

const renanSeguro = Object.create(pessoa);
renanSeguro.nome = 'Renan';
renanSeguro.idade = 25;

console.log('Idade (seguro):', renanSeguro.idade); // 25
console.log('Idade (protótipo):', pessoa.idade);   // 30


/********************************************************************
 * 🧠 RESUMO FINAL
 * 
 * ✔ Objeto → sobrescreve protótipo
 * ✔ Escopo → variável interna sobrescreve externa
 * ❌ Variável NÃO afeta propriedade de objeto
 ********************************************************************/