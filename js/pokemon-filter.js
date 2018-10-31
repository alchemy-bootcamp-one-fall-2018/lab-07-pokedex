import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';

const pokemon = pokeApi.getAll();
const textBox = document.getElementById('textBox');
const numBox = document.getElementById('numBox');
const search = document.getElementById('search');

const filter = {
    
    init() {
        search.addEventListener('keyup', function() {
            const selText = document.querySelector('option[name="selectText"]:checked');
            const selNum = document.querySelector('option[name="selectNum"]:checked');
            console.log(selText.value);
            let filtered = [];

            for(let j = 0; j < pokeApi.shortLength; j++) {
                if(pokemon[j][selText.value].includes(textBox.value) && pokemon[j][selNum.value] >= numBox.value) {
                    filtered.push(pokemon[j]);
                }
            }

            // if(se)
            generateTable.init(filtered);
        });
    }
};

export default filter;