const type1Input = document.getElementById('filter-type1');
const type2Input = document.getElementById('filter-type2');
const baseInput = document.getElementById('filter-base');

const pokemonFilter = {
    init(onFilter) {
        type1Input.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value, baseInput.value);
        });
        type2Input.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value), baseInput.value;
        });
        baseInput.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value, baseInput.value);
        });
    }   
};

export default pokemonFilter;