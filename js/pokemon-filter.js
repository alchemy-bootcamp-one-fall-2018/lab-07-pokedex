import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

const textBox = document.getElementById('textBox');
const select = document.getElementById('select');

const filter = {
    
    init() {
        const pokemon = pokeApi.getAll();
        const filtered = [];

        textBox.addEventListener('keyup', function() {
            console.log('key');
            for(let j = 0; j < 50; j++) {
                console.log(pokemon[j]);
                // if(pokemon[j].select.value.includes(textBox.value)) {
                //     filtered.push(pokemon[j]);
                // } 
            }
            generateTable.init(filtered);
        });
    }
};

export default filter;