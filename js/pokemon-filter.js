const pokemonInput = document.getElementById('filter-name');
const type1Input = document.getElementById('filter-type-1');
const type2Input = document.getElementById('filter-type-2');
const ability1Input = document.getElementById('filter-ability-1');
const shapeInput = document.getElementById('filter-shape');


const pokemonFilter = {
    init(onFilter) {
        pokemonInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, ability1Input.value, shapeInput.value);
        });
        type1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, ability1Input.value, shapeInput.value);
        });
        type2Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, ability1Input.value, shapeInput.value);
        });
        ability1Input.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, ability1Input.value, shapeInput.value);
        });
        shapeInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, type1Input.value, type2Input.value, ability1Input.value, shapeInput.value);
        });
        //console.log(pokemonFilter);
    }
};

export default pokemonFilter;