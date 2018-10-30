import html from './html.js';

const pokemonBody = document.getElementById("pokemon-table-body");

function makeRow(pokemon) {
    return html`<tr>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.speed}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.tags.join(', ')}</td>
    </tr>`;
}

