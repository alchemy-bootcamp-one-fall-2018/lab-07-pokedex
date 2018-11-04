import html from './html.js';

const pokemonTbody = document.getElementById('pokemon-tbody');

function makeRow(pokemon) {
    return html`<tr>
        <td><img src="${pokemon.url_image}" /></td>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemon.speed}</td>
    </tr>`;
}


const pokemonTable = {
    init(pokemon) {
        for(var i = 0; i < pokemon.length; i++) {
            let tableRow = makeRow(pokemon[i]);
            pokemonTbody.appendChild(tableRow);
        }
    },
    update(pokemon) {
        while(pokemonTbody.lastElementChild) {
            pokemonTbody.lastElementChild.remove();
        }
        pokemonTable.init(pokemon);
    }
};

export default pokemonTable;