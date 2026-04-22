/**
 * MODELO POKÉMON
 * 
 * O que é uma classe?
 * É um "molde" para criar objetos com a mesma estrutura.
 * 
 * O que são propriedades?
 * São características do objeto (número, nome, tipos, foto)
 */

class Pokemon {
    number;      // ID do Pokémon (ex: 25 para Pikachu)
    name;        // Nome do Pokémon (ex: "pikachu")
    type;        // Tipo principal (ex: "electric")
    types = [];  // Array com todos os tipos (ex: ["electric"])
    photo;       // URL da imagem do Pokémon
}

// Exportamos a classe para ser usada em outros arquivos
// (em navegador, a classe fica global automaticamente)