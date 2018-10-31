// What static DOM does this component need to know about?
const type1Input = document.getElementById('filter-type1');
const type2Input = document.getElementById('filter-type2');
const attackInput = document.getElementById('filter-attack');

const pokemonFilter = {
    // what does this component need from parent?
    init(onFilter) {

        
        // on keypress event, call the onFilter 
        // callback with current value of the input
        type1Input.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value, attackInput.value);
        });
        
        type2Input.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value, attackInput.value);
        });

        attackInput.addEventListener('keyup', function() {
            onFilter(type1Input.value, type2Input.value, attackInput.value);
        });

        // same as above, but with single listening function:

        // function handleFilter() {
        //     onFilter(type1Input.value, type2Input.value);
        // }
        // type1Input.addEventListener('keyup', handleFilter);
        // type2Input.addEventListener('keyup', handleFilter);
    }
};

export default pokemonFilter;
