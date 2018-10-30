import html from '../html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(singlePokemon) {
    return html`<tr>
        <td>${singlePokemon.pokemon}</td>
        <td>${singlePokemon.type_1}</td>
        <td>${singlePokemon.type_2}</td>
        <td>${singlePokemon.attack}</td>
        <td>${singlePokemon.defense}</td>
        <td>${singlePokemon.hp}</td>
    </tr>`;
}

const pokemonTable = {
    init(pokemon) {

        for(let i = 0; i < pokemon.length; i++) {
            const tr = makeRow(pokemon[i]);
            tableBody.appendChild(tr);
        }
    },
    update(pokemon) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }

        pokemonTable.init(pokemon);
    }
};

export default pokemonTable;