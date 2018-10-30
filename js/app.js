import pokemon from './data/pokedex.js';

console.log(pokemon[0]);

const pokeTable = document.getElementById('pokeTable');
var html = '<tr>';

for(let i = 0; i < 10; i++){
    html += '<td>' + pokemon[i].pokemon + '</td></tr>';
}

pokeTable.innerHTML = html;