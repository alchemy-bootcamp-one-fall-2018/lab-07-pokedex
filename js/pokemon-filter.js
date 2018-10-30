const typeInput = document.getElementById('filter-type');
const nameInput = document.getElementById('filter-name');
const attackMinInput = document.getElementById('filter-attack');
const defenseMinInput = document.getElementById('filter-defense');

const pokemonsFilter = {

    init(onFilter) {

        typeInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value);
        });

        nameInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value);
        });

        attackMinInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value);
        });

        defenseMinInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value);
        });
    }
};

export default pokemonsFilter;