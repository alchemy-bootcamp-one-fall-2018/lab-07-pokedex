import html from './html.js';

const tableBody = document.getElementById('pokemon-body');

function makePokemon(pokemon) {

    return html`
        <tr>
            <td>${pokemon.color_1}</td>
            <td>${pokemon.speed}</td>
            <td>${pokemon.pokemon}</td>
            <td>${pokemon.type_1}</td>
            <td>${pokemon.type_2}</td>
            <td>${pokemon.attack}</td>
            <td>${pokemon.defense}</td>
            <td>${pokemon.shape}</td>
        </tr>`;
}

const pokemonTable = {

    init(pokemon) {

        for(let i = 0; i < pokemon.length; i++) {
            const tr = makePokemon(pokemon[i]);
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
