import html from '../html.js';

const tableBody = document.getElementById('pokedex-body');

function makeRow(pokedex) {
    return html`<tr>
        <td>${pokedex.pokemon}</td>
        <td>${pokedex.type_1}</td>
        <td>${pokedex.type_2}</td>
        <td>${pokedex.attack}</td>
    </tr>`;
}

const pokedexTable = {
    init(pokedex) {

        for(let i = 0; i < pokedex.length; i++) {
            const tr = makeRow(pokedex[i]);
            tableBody.appendChild(tr);
        }
    }
};

export default pokedexTable;
