// What static DOM does this component need to know about?
const nameInput = document.getElementById('filter-name');
const type_1Input = document.getElementById('filter-type_1');
const type_2Input = document.getElementById('filter-type_2');
const attackInput = document.getElementById('filter-attack');

const pokeFilter = {
    // what does this component need from parent?
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type_1Input.value);
        });
        
        type_1Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type_1Input.value);
        });
        type_2Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type_2Input.value);
        });
        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, attackInput.value);
        });
    }

};

export default pokeFilter;