'use strict';

import html from '..html.js';

function makeRow('pokedex-body');

function makeRow(pokemun) {
    return html`<tr>
        <td>${pokemun.pokemon}</td>
        <td>${pokemun.image}</td>
        <td>${pokemun.base-experience}</td>
        <td>${pokemun.type_1}</td>
        <td>${pokemun.type_2}</td>
        <td>${pokemun.ability-hidden}</td>
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
