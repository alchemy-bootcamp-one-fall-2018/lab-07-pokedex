const pokemonInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const ability_1Input = document.getElementById('filter-ability-1');
const shapeInput = document.getElementById('filter-shape');


const pokemonFilter = {
    init(onFilter) {
        pokemonInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, typeInput.value, ability_1Input.value, shapeInput.value);
        });
        typeInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, typeInput.value, ability_1Input.value, shapeInput.value);
        });
        ability_1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, typeInput.value, ability_1Input.value, shapeInput.value);
        });
        shapeInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, typeInput.value, ability_1Input.value, shapeInput.value);
        });
        //console.log(pokemonFilter);
    }
};

export default pokemonFilter;