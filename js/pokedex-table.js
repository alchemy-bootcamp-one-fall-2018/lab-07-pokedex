import html from './html.js';

const tableBody = document.getElementById('pokedex-body');

function makeRow(pokemon) {
    return html`<tr>
        <td style="background-color: ${pokemon.color_1}">${pokemon.pokemon}</td>
        <td class="${pokemon.type_1}"></td>
        <td class="${pokemon.type_2}"></td>
        <td style="background-color: red">${pokemon.hp}</td>
        <td style="background-color: orange">${pokemon.attack}</td>
        <td style="background-color: yellow">${pokemon.defense}</td>
        <td style="background-color: lightblue">${pokemon.special_attack}</td>
        <td style="background-color: lightgreen">${pokemon.special_defense}</td>
        <td style="background-color: pink">${pokemon.speed}</td>
        <td style="background-color: lightgray">${pokemon.generation_id}</td>
    </tr>`;
}

const pokedexTable = {
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
        pokedexTable.init(pokemons);
    }
};

export default pokedexTable;