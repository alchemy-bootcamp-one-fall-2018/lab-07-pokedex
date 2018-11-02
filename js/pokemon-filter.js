const pokemonInput = document.getElementById('filter-name');
const type_1Input = document.getElementById('filter-type-1');
const type_2Input = document.getElementById('filter-type-2');
const ability_1Input = document.getElementById('filter-ability-1');
const shapeInput = document.getElementById('filter-shape');


const pokemonFilter = {
    init(onFilter) {
        pokemonInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type_1Input.value, type_2Input.value, ability_1Input.value, shapeInput.value);
        });
        type_1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type_1Input.value, type_2Input.value, ability_1Input.value, shapeInput.value);
        });
        type_2Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type_1Input.value, type_2Input.value, ability_1Input.value, shapeInput.value);
        });
        ability_1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type_1Input.value, type_2Input.value, ability_1Input.value, shapeInput.value);
        });
        shapeInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type_1Input.value, type_2Input.value, ability_1Input.value, shapeInput.value);
        });
        //console.log(pokemonFilter);
    }
};

export default pokemonFilter;