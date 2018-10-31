import html from './html.js';

const tableBody = document.getElementById('table-body');

function makeRow(pokemon){
    return html `
    <tr>
        <td><img src="${pokemon.url_image}" alt="picture of ${pokemon.pokemon}" /></td>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemon.hp}</td>
    </tr>`;
}

const pokeTable = {
    init(pokemons){
        for(let i = 0; i < pokemons.length; i++){
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);
        }
    },
    update(pokemons){
        while(tableBody.lastElementChild){
            tableBody.lastElementChild.remove();
        }
        pokeTable.init(pokemons);
    }
};

export default pokeTable;