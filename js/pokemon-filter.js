const nameInput = document.getElementById('filter-name');
const attackInput = document.getElementById('filter-attack');
const defenseInput = document.getElementById('filter-defense');
const hpInput = document.getElementById('filter-hp');

const pokeFilter = {

    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });
        
        defenseInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });

        hpInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, attackInput.value, defenseInput.value, hpInput.value);
        });
    }
};

export default pokeFilter;