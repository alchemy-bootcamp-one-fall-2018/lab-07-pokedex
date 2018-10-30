import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

const pokemon = pokeApi.getAll();
const textBox = document.getElementById('textBox');
// const select = document.getElementById('select');

const filter = {
    
    init() {

        textBox.addEventListener('keyup', function() {
            let filtered = [];
            for(let j = 0; j < 50; j++) {
                if(pokemon[j].pokemon.includes(textBox.value) && textBox.value) {
                    filtered.push(pokemon[j]);
                }
            }
            // generateTable.init(filtered);
            console.log('filtered', filtered);
        });
    }
};

export default filter;