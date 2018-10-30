const type1Input = document.getElementById('filter-type1');
const type2Input = document.getElementById('filter-type2');

const pokemonFilter = {
    init(onFilter) {
        type1Input.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value);
        });
        type2Input.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value);
        });

    }   
};

export default pokemonFilter;