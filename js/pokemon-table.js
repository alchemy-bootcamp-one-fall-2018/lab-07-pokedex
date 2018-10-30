const pokemonBody = document.getElementById('pokemon-table');

function makeRow(pokemon) {
    return html`<tr>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
    </tr>`;
}

export default pokemonTable;