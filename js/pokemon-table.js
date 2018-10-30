/*eslint-disable no-console */
import html from './html.js';

const tableBody = document.getElementById('pokemon-body');

console.log(tableBody);

function makeRow(pokemon) {
    return html`<tr>
    <td>${pokemon.pokemon}</td>
    <td>${pokemon.type_1}</td>
    <td>${pokemon.type_2}</td>
    <td>${pokemon.attack}</td>
    <td>${pokemon.weight}</td>
    <td>${pokemon.height}</td>
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
        //remove existing rows
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        //add new rows
        pokemonTable.init(pokemons);
    }
};

export default pokemonTable;