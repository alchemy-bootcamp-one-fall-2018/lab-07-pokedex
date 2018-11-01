import html from './html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemonParam) {
    return html`<tr>
    <td><img src="${pokemonParam.url_image}"/></td>
    <td>${pokemonParam.pokemon}</td>
    <td>${pokemonParam.type_1}</td>
    <td>${pokemonParam.type_2}</td>
    <td>${pokemonParam.shape}</td>
    <td>${pokemonParam.speed}</td>
    
    </tr>`;
}

const pokemonTable = {
    init(pokemonParam) {
        for(var i = 0; i < pokemonParam.length; i++) {
            let row = makeRow(pokemonParam[i]);
            tableBody.appendChild(row);
        }
    },

    update(pokemonParam) {
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();
        }
        pokemonTable.init(pokemonParam);
        
    }
};



export default pokemonTable;