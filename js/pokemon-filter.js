const nameFilter = document.getElementById('poke-pokemon');
const type_1Filter = document.getElementById('poke-type_1');
const type_2Filter = document.getElementById('poke-type_2');
const ability1Filter = document.getElementById('poke-ability-1');
const ability2Filter = document.getElementById('poke-ability-2');

const pokeFilter = {
    init(onFilter) {
        nameFilter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, ability2Filter.value);
        });
        type_1Filter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, ability2Filter.value);
        });
        type_2Filter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, ability2Filter.value);
        });
        ability1Filter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, ability2Filter.value);
        });
        ability2Filter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, ability1Filter.value, ability2Filter.value);
        });
    }
};

export default pokeFilter;