const typeInput = document.getElementById('filter-type');
const nameInput = document.getElementById('filter-name');
const attackMinInput = document.getElementById('filter-attack');

const pokemonsFilter = {

    init(onFilter) {

        typeInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value);
        });

        nameInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value);
        });

        attackMinInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value);
        });
    }
};

export default pokemonsFilter;