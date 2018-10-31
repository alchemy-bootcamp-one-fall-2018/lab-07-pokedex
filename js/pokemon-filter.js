import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

const pokemon = pokeApi.getAll();
const textBox = document.getElementById('textBox');

const filter = {
    
    init() {
        textBox.addEventListener('keyup', function() {
            const sel = document.querySelector('option:checked').value;

            console.log(sel);
            let filtered = [];
            for(let j = 0; j < pokeApi.shortLength; j++) {
                if(pokemon[j][sel].includes(textBox.value)) {
                    filtered.push(pokemon[j]);
                }
            }
            generateTable.init(filtered);
        });
    }
};

export default filter;