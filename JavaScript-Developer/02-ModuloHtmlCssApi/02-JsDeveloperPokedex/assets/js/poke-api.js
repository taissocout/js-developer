/**
 * POKE-API.JS
 * 
 * O que é uma API?
 * É um serviço que fornece dados. A PokeAPI nos dá informações de Pokémon.
 * 
 * O que é fetch?
 * Função nativa do JavaScript para fazer requisições HTTP.
 * 
 * O que é Promise?
 * Representa um valor que estará disponível no futuro.
 * 
 * O que é .then()?
 * Método que executa uma função quando a Promise é resolvida.
 */

const pokeApi = {};

/**
 * Converte os dados brutos da API para o formato da nossa classe Pokemon
 * @param {Object} pokeDetail - Dados brutos da API
 * @returns {Pokemon} - Objeto Pokemon formatado
 */
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();

    // ID do Pokémon (vem da API como "id")
    pokemon.number = pokeDetail.id;

    // Nome do Pokémon
    pokemon.name = pokeDetail.name;

    // Mapeia os tipos: a API retorna um array de objetos com type.name
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [primaryType] = types; // Pega o primeiro tipo como principal

    pokemon.types = types;      // Array com todos os tipos
    pokemon.type = primaryType;  // Tipo principal (para cor do card)

    // Foto do Pokémon (dream_world tem imagens melhores)
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    // Fallback: se não tiver imagem no dream_world, usa a padrão
    if (!pokemon.photo) {
        pokemon.photo = pokeDetail.sprites.front_default;
    }

    return pokemon;
}

/**
 * Busca detalhes de um Pokémon específico pela URL
 * @param {Object} pokemon - Objeto com a URL do Pokémon
 * @returns {Promise<Pokemon>} - Promise com o Pokémon detalhado
 * 
 * FLUXO: fetch(url) -> response.json() -> convertToPokemon()
 */
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)                    // 1. Faz requisição HTTP
        .then((response) => response.json())     // 2. Converte para JSON
        .then(convertPokeApiDetailToPokemon);    // 3. Converte para nosso formato
};

/**
 * Busca uma lista de Pokémon da API
 * @param {number} offset - Quantos Pokémon pular do início (paginação)
 * @param {number} limit - Quantos Pokémon buscar
 * @returns {Promise<Array<Pokemon>>} - Promise com array de Pokémon
 * 
 * Exemplo: getPokemons(0, 10) busca os primeiros 10 Pokémon
 *          getPokemons(10, 10) busca do 11º ao 20º
 */
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)                                    // 1. Busca lista
        .then((response) => response.json())             // 2. Converte para JSON
        .then((jsonBody) => jsonBody.results)            // 3. Pega array de resultados
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // 4. Cria array de Promises
        .then((detailRequests) => Promise.all(detailRequests))      // 5. Aguarda todas as Promises
        .then((pokemonsDetails) => pokemonsDetails);                // 6. Retorna array final
};

/**
 * VERSÃO COM ASYNC/AWAIT (mais moderna e legível)
 * 
 * async function getPokemonsAsync(offset, limit) {
 *     try {
 *         const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
 *         const response = await fetch(url);
 *         const jsonBody = await response.json();
 *         const pokemons = jsonBody.results;
 *         
 *         const detailRequests = pokemons.map(pokeApi.getPokemonDetail);
 *         const pokemonsDetails = await Promise.all(detailRequests);
 *         
 *         return pokemonsDetails;
 *     } catch (error) {
 *         console.error("Erro ao buscar Pokémon:", error);
 *     }
 * }
 */