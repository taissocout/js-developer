// ============================================
// ELEMENTOS DO DOM
// ============================================
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const pokemonCountSpan = document.getElementById('pokemonCount');
const modal = document.getElementById('pokemonModal');

// ============================================
// CONFIG
// ============================================
const MAX_RECORDS = 2000;
const LIMIT = 50;

let offset = 0;
let totalLoaded = 0;

// ============================================
// CARD HTML
// ============================================
function convertPokemonToCard(pokemon) {
    return `
        <li class="pokemon-card ${pokemon.type}" data-id="${pokemon.number}">
            <div class="pokemon-inner">
                <span class="pokemon-number">#${String(pokemon.number).padStart(3, '0')}</span>

                <div class="pokemon-name">${pokemon.name}</div>

                <div class="pokemon-detail">
                    <ol class="pokemon-types">
                        ${pokemon.types.map(type =>
                            `<li class="pokemon-type">${type}</li>`
                        ).join('')}
                    </ol>

                    <img class="pokemon-image"
                        src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </div>
        </li>
    `;
}

// ============================================
// CONTADOR
// ============================================
function updateCount() {
    if (pokemonCountSpan) {
        pokemonCountSpan.textContent = totalLoaded;
    }
}

// ============================================
// LOAD POKEMONS
// ============================================
async function loadPokemons() {
    try {
        loadMoreButton.disabled = true;
        loadMoreButton.innerHTML = 'Carregando...';

        const pokemons = await pokeApi.getPokemons(offset, LIMIT);

        pokemonList.innerHTML += pokemons.map(convertPokemonToCard).join('');

        totalLoaded += pokemons.length;
        updateCount();

        offset += LIMIT;

        if (offset >= MAX_RECORDS) {
            loadMoreButton.remove();
        }

    } catch (err) {
        console.error('Erro ao carregar:', err);
    } finally {
        if (loadMoreButton) {
            loadMoreButton.disabled = false;
            loadMoreButton.innerHTML = 'Carregar Mais';
        }
    }
}

// ============================================
// EVENTO CLICK (DELEGAÇÃO)
// ============================================
pokemonList.addEventListener('click', (e) => {
    const card = e.target.closest('.pokemon-card');
    if (!card) return;

    const id = card.dataset.id;
    if (id) openModal(id);
});

// ============================================
// ABRIR MODAL
// ============================================
async function openModal(id) {
    if (!modal) return;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // loading
    document.getElementById('modalPokemonName').innerHTML = 'Carregando...';

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        // nome
        document.getElementById('modalPokemonName').textContent = data.name;
        document.getElementById('modalPokemonName2').textContent = data.name;

        // número
        document.getElementById('modalPokemonNumber').textContent =
            `#${String(data.id).padStart(3, '0')}`;

        // imagem
        const img =
            data.sprites.other['official-artwork'].front_default ||
            data.sprites.front_default;

        document.getElementById('modalPokemonImage').src = img;

        // tipos estilizados
        document.getElementById('modalPokemonTypes').innerHTML =
            data.types.map(t =>
                `<span class="pokemon-type ${t.type.name}">${t.type.name}</span>`
            ).join(' ');

        // altura / peso
        document.getElementById('modalPokemonHeight').textContent =
            (data.height / 10).toFixed(1) + ' m';

        document.getElementById('modalPokemonWeight').textContent =
            (data.weight / 10).toFixed(1) + ' kg';

        // experiência
        document.getElementById('modalPokemonExp').textContent =
            data.base_experience;

        // habilidade
        document.getElementById('modalPokemonAbility').textContent =
            data.abilities[0]?.ability?.name || 'N/A';

        // stats (NOVO 🔥)
        document.getElementById('modalPokemonStats').innerHTML =
            data.stats.map(stat => {
                const value = stat.base_stat;
                return `
                    <div class="stat-bar-container">
                        <div>${stat.stat.name}: ${value}</div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill" style="width:${value}%"></div>
                        </div>
                    </div>
                `;
            }).join('');

    } catch (err) {
        console.error(err);
        document.getElementById('modalPokemonName').textContent = 'Erro ao carregar';
    }
}

// ============================================
// FECHAR MODAL
// ============================================
function closeModal() {
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// botão X
const closeBtn = document.querySelector('.modal-close');
if (closeBtn) closeBtn.addEventListener('click', closeModal);

// clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================
// BOTÃO
// ============================================
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', loadPokemons);
}

// ============================================
// INIT
// ============================================
loadPokemons();