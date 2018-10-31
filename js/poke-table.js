import pokeApi from './pokemon-api.js';

const pokeTable = document.getElementById('pokeTable');
const generateTable = {
    
    init(pokemon) {
        var html = '<tr><th>Pokemon Name</th><th>Weight</th><th>Height</th><th>Type_1</th><th>Type_2</th><th>Attack</th></tr><tr>';

        var length = pokeApi.shortLength;

        if(pokemon.length < pokeApi.shortLength) {
            length = pokemon.length;
        }
        for(let i = 0; i < length; i++){
            // html += '<td>' + pokemon[i].pokemon + '</td>';
            html += '<td>' + pokemon[i].pokemon + '</td>';
            html += '<td>' + pokemon[i].weight + '</td>';
            html += '<td>' + pokemon[i].height + '</td>';
            html += '<td>' + pokemon[i].type_1 + '</td>';
            html += '<td>' + pokemon[i].type_2 + '</td>';
            html += '<td>' + pokemon[i].attack + '</td>';
            html += '</tr>';
        }
        pokeTable.innerHTML = html;
    }
};

export default generateTable;