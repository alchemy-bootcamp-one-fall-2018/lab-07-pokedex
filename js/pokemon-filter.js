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
            let filtered = [];

            pokemon.forEach(function(item) {
                if(item[selText.value].includes(textBox.value) && item[selNum.value] >= numBox.value) {
                    filtered.push(item);
                }

            });

            generateTable.init(filtered);
        });
    }
};

export default filter;