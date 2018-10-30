import html from './html.js';

const tableBody = document.getElementById('pokemon-body');


function makePokemon(pokemon) {

    return html ` /*html*/
        <tr>
            <td>${pokemon.url_image}</td>
            <td>${pokemon.name}</td>
            <td>${pokemon.type_1}</td>
            <td>${pokemon.type_2}</td>
            <td>${pokemon.attack}</td>
            <td>${pokemon.defense}</td>
            <td>${pokemon.evolution_chain_id}</td>
        </tr>`;
}

const  pokemonTable = {

    init(pokemon) {

        for(let i = 0; i < pokemon.length; i++) {
            const tr = makePokemon(pokemon[1]);
            tableBody.appendChild(tr);
        }
    }
};


export default pokemonTable;
