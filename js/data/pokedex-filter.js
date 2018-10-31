// What static DOM does this component need to know about?
const nameInput = document.getElementById('filter-pokemon');
const type_1Input = document.getElementById('filter-type_1');
const type_2Input = document.getElementById('filter-type_2');
const attackInput = document.getElementById('filter-attack');

const pokedexFilter = {
    // what does this component need from parent?
    init(onFilter) {

        // on keypress event, call the onFilter 
        // callback with current value of the input
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

        // same as above, but with single listening function:

        // function handleFilter() {
        //     onFilter(nameInput.value, tagsInput.value);
        // }
        // nameInput.addEventListener('keyup', handleFilter);
        // tagsInput.addEventListener('keyup', handleFilter);
    }
};

export default pokedexFilter;