import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';
import filter from './pokemon-filter.js';


const pokemon = pokeApi.getAll();
const textBox = document.getElementById('textBox');

generateTable.init(pokemon);
// filter.init();

textBox.addEventListener('keyup', function() {
    console.log(pokemon[0]);
    console.log('key', textBox.value);
    if(pokemon[0].pokemon.includes(textBox.value)) {
        console.log('yes');
    }
});





