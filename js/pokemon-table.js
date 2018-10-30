import html from './html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemon) {
    return html`<tr>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.url_image}</td>

        </tr>`;
}

const pokemonTable = {
    init(pokemons) {
        for(let i = 0; i < pokemons.length; i++) {
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);

        }
    }
};

export default pokemonTable;