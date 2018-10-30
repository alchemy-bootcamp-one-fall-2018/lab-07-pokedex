import html from '../html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(singlePokemon) {
    return html`<tr>
        <td>name: ${singlePokemon.pokemon}</td>
        <td>type1:${singlePokemon.type_1}</td>
        <td>type2:${singlePokemon.type_2}</td>
        <td>atk:${singlePokemon.attack}</td>
        <td>def:${singlePokemon.defense}</td>
        <td>hp:${singlePokemon.hp}</td>
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