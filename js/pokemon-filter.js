/*  */

const filterName = document.getElementById('filter-name');
const filterType1 = document.getElementById('filter-type1');
const filterType2 = document.getElementById('filter-type2');
const filterAttack = document.getElementById('filter-attack');
const filterDefense = document.getElementById('filter-defense');
const filterSpeed = document.getElementById('filter-speed');

const pokemonFilter = {
    init(onFilter) {
        pokemonFilter.addEventListener('keyup', function() {
            onFilter(
                filterName.value,
                filterType1.value,
                filterType2.value,
                filterAttack.value,
                filterDefense.value,
                filterSpeed.value
            );
        });
    }
};

export default pokemonFilter;