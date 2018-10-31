// imports HTML function from html file
import html from './html.js';

//defines where to place the template in the HTML DOC

const tableBody = document.getElementById('pokemon-body');

// Function creates and defines the template to place data in

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

// When this function is called, iterate through all the pokemon and fill in the template with data and append to the HTML document

const pokemonTable = {

    init(pokemon) {

        for(let i = 0; i < pokemon.length; i++) {
            const tr = makePokemon(pokemon[i]);
            tableBody.appendChild(tr);
        }
    },
    //removes all rows upon an updated search
    update(pokemon) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        // creates new rows based on the search
        pokemonTable.init(pokemon);

    }
};




export default pokemonTable;
