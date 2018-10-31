import html from '../html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemon) {
    return html `<tr>
        <td ><img class="character-pic" src="${pokemon.url_image}"></td>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.hp}</td>
        <td>${pokemon.attack}</td>
     </tr>`;
}
const pokeTable = {
    init(pokemons){
        for(let i = 0; i < pokemons.length; i++) {
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);
        }
    },
    update(pokemons) {
        //this will remove all existing rows
        while(tableBody.lastElementChild) {
            tableBody.lastElementChild.remove();    
        }

        //add new rows
        pokeTable.init(pokemons);
    }

};
        
export default pokeTable;