document.getElementById('searchBtn').addEventListener('click', async () => {
  const name = document.getElementById('pokemonName').value.toLowerCase();
  const infoDiv = document.getElementById('pokemonInfo');
  infoDiv.innerHTML = '';

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) throw new Error('Pokémon no encontrado');
    const data = await res.json();

    infoDiv.innerHTML = `
      <h3>${data.name.toUpperCase()}</h3>
      <img src="${data.sprites.front_default}" alt="${data.name}" />
      <p><strong>Altura:</strong> ${data.height}</p>
      <p><strong>Peso:</strong> ${data.weight}</p>
      <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
    `;
  } catch (error) {
    infoDiv.innerHTML = `<p>${error.message}</p>`;
  }
});
