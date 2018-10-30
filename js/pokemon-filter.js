const nameInput = document.getElementById('filter-name');
const attackInput = document.getElementById('filter-attack');

const pokeFilter = {

    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, attackInput.value);
        });

        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, attackInput.value);
        });
    }
};

export default pokeFilter;