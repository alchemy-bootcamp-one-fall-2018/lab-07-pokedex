const pokemonInput = document.getElementById('filter-pokemon');
const type1Input = document.getElementById('filter-type1');
const type2Input = document.getElementById('filter-type2');
const baseInput = document.getElementById('filter-base');
const ability_hiddenInput = document.getElementById('filter-ability_hidden');

const pokemonFilter = {
    init(onFilter) {
        pokemonInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, baseInput.value, ability_hiddenInput.value);
        });
        type1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, baseInput.value, ability_hiddenInput.value);
        });
        type2Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, baseInput.value, ability_hiddenInput.value);
        });
        baseInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, baseInput.value, ability_hiddenInput.value);
        });
        ability_hiddenInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, baseInput.value, ability_hiddenInput.value);
        });
    }   
};

export default pokemonFilter;