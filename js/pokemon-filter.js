/*eslint-disable no-console */

const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const attackInput = document.getElementById('filter-attack');
const weightInput = document.getElementById('filter-weight');
const heightInput = document.getElementById('filter-height');

const pokemonFilter = {
    //what this component needs from parent
    init(onFilter) {

        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, weightInput.value, heightInput.value);
        });
        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, weightInput.value, heightInput.value);
        });
        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, weightInput.value, heightInput.value);
        });
        weightInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, weightInput.value, heightInput.value);
        });
        heightInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, attackInput.value, weightInput.value, heightInput.value);
        });

        console.log(onFilter);
    }
};

export default pokemonFilter;
