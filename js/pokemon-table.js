import html from './pokemon-api';

const tableBody = document.getElementById('pokemon-tbody');

function makeRow(pokemon) {
    return html` 
        <tr>
            <td>${pokemon.pokemon}</td>
            <td>${pokemon.url_image}</td>
            <td>${pokemon.type_1}</td>
            <td>${pokemon.type_2}</td>
            <td>${pokemon.hp}</td>
            <td>${pokemon.ability_1}</td>
            <td>${pokemon.ability_2}</td>
            <td>${pokemon.ability_hidden}</td>
        </tr>`;
}