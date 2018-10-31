const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const hpInput = document.getElementById('filter-hp');
const ability1Input = document.getElementById('filter-ability1');
const ability2Input = document.getElementById('filter-ability2');
const hiddenInput = document.getElementById('filter-hiddenAbility');

const pokemonsFilter = {
    init(onFilter) {
        function handleFilter() {
            onFilter(nameInput.value, typeInput.value, 
                hpInput.value, ability1Input.value,
                ability2Input.value, hiddenInput.value);
        }
        nameInput.addEventListener('keyup', handleFilter);
        typeInput.addEventListener('keyup', handleFilter);
        hpInput.addEventListener('keyup', handleFilter);
        ability1Input.addEventListener('keyup', handleFilter);
        ability2Input.addEventListener('keyup', handleFilter);
        hiddenInput.addEventListener('keyup', handleFilter);
    }
}; 

export default pokemonsFilter;