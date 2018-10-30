const typeInput = document.getElementById('filter-type');
const nameInput = document.getElementById('filter-name');
const attackMinInput = document.getElementById('filter-attack');
const defenseMinInput = document.getElementById('filter-defense');
const hpMinInput = document.getElementById('filter-hp');

const pokemonsFilter = {

    init(onFilter) {

        typeInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value, hpMinInput.value);
        });

        nameInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value, hpMinInput.value);
        });

        attackMinInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value, hpMinInput.value);
        });

        defenseMinInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value, hpMinInput.value);
        });

        hpMinInput.addEventListener('keyup', function() {
            onFilter(typeInput.value, nameInput.value, attackMinInput.value, defenseMinInput.value, hpMinInput.value);
        });
    }
};

export default pokemonsFilter;