// 'use strict';

import html from './html.js';

const tableBody = document.getElementById('pokedex-body');

function makeRow(pokemun) {
    return html`<tr>
        <td>${pokemun.pokemon}</td>
        <td><img src= ${pokemun.url_image} style="width:50px"></td>
        <td>${pokemun.base_experience}</td>
        <td>${pokemun.type_1}</td>
        <td>${pokemun.type_2}</td>
        <td>${pokemun.ability_hidden}</td>
    </tr>`;
}

const pokedexTable = {
    init(pokemun){
        pokemun.forEach(function(pokemun) {
            const tr = makeRow(pokemun);
            tableBody.appendChild(tr);
        });
    }
};

export default pokedexTable;
