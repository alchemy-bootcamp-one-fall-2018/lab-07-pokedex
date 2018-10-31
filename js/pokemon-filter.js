const nameFilter = document.getElementById('poke-pokemon');
const type_1Filter = document.getElementById('poke-type_1');
const type_2Filter = document.getElementById('poke-type_2');
const speedFilter = document.getElementById('poke-speed');
const hpFilter = document.getElementById('poke-hp');

const pokeFilter = {
    init(onFilter) {
        nameFilter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, speedFilter.value, hpFilter.value);
        });
        type_1Filter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, speedFilter.value, hpFilter.value);
        });
        type_2Filter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, speedFilter.value, hpFilter.value);
        });
        speedFilter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, speedFilter.value, hpFilter.value);
        });
        hpFilter.addEventListener('keyup', function() {
            onFilter(nameFilter.value, type_1Filter.value, type_2Filter.value, speedFilter.value, hpFilter.value);
        });
    }
};

export default pokeFilter;