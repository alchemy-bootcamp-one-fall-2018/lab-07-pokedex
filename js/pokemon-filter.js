/*eslint-disable no-console */

const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const attackInput = document.getElementById('filter-attack');
const weightInput = document.getElementById('filter-weight');
const heightInput = document.getElementById('filter-height');

const pokemonFilter = {
    //what this component needs from parent
    init(onFilter) {

        function handleFilter() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, weightInput.value, heightInput.value);
        }

        nameInput.addEventListener('keyup', handleFilter);
        typeInput.addEventListener('keyup', handleFilter);
        attackInput.addEventListener('keyup', handleFilter);
        weightInput.addEventListener('keyup', handleFilter);
        heightInput.addEventListener('keyup', handleFilter);

    }
};



export default pokemonFilter;
