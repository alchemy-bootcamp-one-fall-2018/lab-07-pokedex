const pokemonInput = document.getElementById('poke-name');
const pokeType1 = document.getElementById('poke-type1');
const pokeType2 = document.getElementById('poke-type2');
const pokeShape = document.getElementById('poke-shape');
const pokeSpeed = document.getElementById('poke-speed');

const pokeFilter = {
    init(onFilter) {
        pokemonInput.addEventListener('keyup', function() { onFilter(pokemonInput.value, pokeType1.value, pokeType2.value, pokeShape.value, pokeSpeed.value); 
        });
    }    
    
};

export default pokeFilter;