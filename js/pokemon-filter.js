
const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const attackInput = document.getElementById('filter-attack');
const defenseInput = document.getElementById('filter-defense');
const hpInput = document.getElementById('filter-hp');

const pokedexFilter = {
    init(onFilter) {

        nameInput.addEventListener('keyup', function() {
        onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        typeInput.addEventListener('keyup', function() {
        onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        attackInput.addEventListener('keyup', function() {
        onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        defenseInput.addEventListener('keyup', function() {
        onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        hpInput.addEventListener('keyup', function() {
        onFilter(nameInput.value, typeInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

    }
};

export default pokedexFilter;