const pokemonInput = document.getElementById('pokemon-filter');
const attackInput = document.getElementById('attack-filter');
const type1Input = document.getElementById('type1-filter');
const type2Input = document.getElementById('type2-filter');
const speedInput = document.getElementById('speed-filter');

const pokemonsFilter = {
    init(onFilter)  {

        pokemonInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, attackInput.value, type1Input.value, type2Input.value, speedInput.value);
        });
        
        attackInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, attackInput.value, type1Input.value, type2Input.value, speedInput.value);
        });    

        type1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, attackInput.value, type1Input.value, type2Input.value, speedInput.value);
        });
        type2Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, attackInput.value, type1Input.value, type2Input.value, speedInput.value);
        });

        speedInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, attackInput.value, type1Input.value, type2Input.value, speedInput.value);
        });
    }
};

export default pokemonsFilter;
