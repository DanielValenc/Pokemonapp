const input = document.getElementById('pokemonName');
const resultsDiv = document.getElementById('pokemonResults');

let allPokemons = [];

// 🟢 1️⃣ Load all Pokémon at startup (only their names)
async function loadPokemonList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const data = await res.json();
  allPokemons = data.results; // [{ name, url }, ...]
}

loadPokemonList();

// 🟢 2️⃣ Listen when the user types
input.addEventListener('input', async () => {
  const query = input.value.toLowerCase();
  resultsDiv.innerHTML = '';

  if (query.length < 1) return; // Wait for him to write at least 1 letters

  const matches = allPokemons.filter(p => p.name.startsWith(query)).slice(0, 10);

  for (const pokemon of matches) {
    try {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      const card = document.createElement('div');
      card.classList.add('pokemon-card');
      card.innerHTML = `
        <h4>${data.name.toUpperCase()}</h4>
        <img src="${data.sprites.front_default}" alt="${data.name}" />
        <p><strong>Heigth:</strong> ${data.height}</p>
        <p><strong>Weight:</strong> ${data.weight}</p>
        <p><strong>Type:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
      `;
      resultsDiv.appendChild(card);
    } catch (err) {
      console.error(err);
    }
  }
});
