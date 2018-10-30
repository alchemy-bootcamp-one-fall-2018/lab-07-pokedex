import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

const type1 = document.getElementById('type1');

const filter = {
   
    init() {
        const pokemon = pokeApi.getAll();
        var filtered = [];
        type1.addEventListener('keyup', function() {
            for(let j = 0; j < 10; j++) {
                if(pokemon[j].type_1 === type1.value) {
                    filtered.push(pokemon[j]);
                }
            }  
            generateTable.init(filtered);
        });

    }
};

export default filter;