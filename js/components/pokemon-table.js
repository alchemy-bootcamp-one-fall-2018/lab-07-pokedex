import html from '../html.js';

const tablebody = document.getElementById('pokemon-body');

function makeRow(pokemon) {
    return html`<tr>
        <!-- <td class="sort asc">First</td> -->
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.Type1}</td>
        <td>${pokemon.Type2}</td>
        <td>${pokemon.Attack}</td>
        <td>${pokemon.Shape}</td>
    </tr>`;
}

const pokemonTable = {
    init(pokemon) {
        for(let i = 0; i < pokemon.length; i++) {
            const tr = makeRow(pokemon[i]);
            tablebody.appendChild(tr);
        
        }
    },
    update(pokemon) {
        while(tablebody.lastElementChild) {
            tablebody.lastElementChild.remove();
        }

        pokemonTable.init(pokemon);

    }
};

export default pokemonTable;