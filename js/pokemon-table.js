
import html from './html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemon) {
    return html`<tr>
        <td><img class="image" src="${pokemon.url_image}"></td>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.ability_1}</td>
        <td>${pokemon.shape}</td>
        <td>${pokemon.attack}</td>
    </tr>`;
}


const pokemonTable = {
    init(pokemons) {
        for(let i = 0; i < pokemons.length; i++) {
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);

        }
    },
    update(pokemons) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        pokemonTable.init(pokemons);
    }
};

export default pokemonTable;