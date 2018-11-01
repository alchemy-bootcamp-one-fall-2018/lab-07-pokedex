import html from './html.js';

const tableBody = document.getElementById('pokedex-body');

function makeRow(pokemon) {
    return html`<tr>
        <td>${pokemon.name}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.attack}</td>
    </tr>`;
}

const pokedexTable = {
    init(pokedex) {

        for(let i = 0; i < pokedex.length; i++) {
            const tr = makeRow(pokedex[i]);
            tableBody.appendChild(tr);
        }

    },
    update(pokedex) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }   
        pokedexTable.init(pokedex);
    }
};

export default pokedexTable;
