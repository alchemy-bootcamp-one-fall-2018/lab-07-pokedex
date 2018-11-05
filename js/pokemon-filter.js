const nameInput = document.getElementById('filter-name');
const type_1Input = document.getElementById('filter-type_1');
// const type_2Input = document.getElementById('filter-type_2');
// const attackInput = document.getElementById('filter-attack');
// const defenseInput = document.getElementById('filter-defense');

const pokemonFilter = {
    init(onFilter) {

        function useFilter() {
            onFilter(nameInput.value, type_1Input.value);
        }
        nameInput.addEventListener('keyup', useFilter); 
        type_1Input.addEventListener('keyup', useFilter);
    }
};
export default pokemonFilter;