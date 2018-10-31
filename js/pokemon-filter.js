const pokemonInput = document.getElementById('filter-pokemon');
const defenseInput = document.getElementById('filter-defense');
const attackInput = document.getElementById('filter-attack');
const type1Input = document.getElementById('filter-type1');
const type2Input = document.getElementById('filter-type2');

const pokemonFilter = {
    init(onFilter) {
        pokemonInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, defenseInput.value, attackInput.value, type1Input.value, type2Input.value);
        });
        defenseInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, defenseInput.value, attackInput.value, type1Input.value, type2Input.value);
        });
        attackInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, defenseInput.value, attackInput.value, type1Input.value, type2Input.value);
        });
        type1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, defenseInput.value, attackInput.value, type1Input.value, type2Input.value);
        });
        type2Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, defenseInput.value, attackInput.value, type1Input.value, type2Input.value);
        });
        
    }
};


export default pokemonFilter;