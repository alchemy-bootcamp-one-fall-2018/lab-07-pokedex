import html from '../html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemon) {
    return html`<tr>
    <td>${pokemon.pokemon}</td>
    </tr>`;
}
const pokemonsTable = {
    init(pokemons) {

        for(let i = 0; i < pokemons.length; i++) {
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);
            console.log(pokemons[i]);
        }
    }
};

export default pokemonsTable;