import html from './html.js';

const tableBody = document.getElementById('pokedex-body');

function makeRow(pokemon) {
    return html `<tr>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.defense}</td>
    </tr>`;
}

const pokeTable = {
    init(pokemon) {
        for(let i = 0; i < pokemon.length; i++) {
            const tr = makeRow(pokemon[i]);
            tableBody.appendChild(tr);
        }
    }
};

export default pokeTable;
