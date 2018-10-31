
// grabs input from textbox
const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const type2Input = document.getElementById('filter-type2');
const attackInput = document.getElementById('filter-attack');
const defenseInput = document.getElementById('filter-defense');


//creates object with function as a property, becoming method

// 
const pokemonFilter = {

    init(onFilter) {
        //On keyPress event, call the onFilter function for current value of textbox
        //event listener subscribes to events

        function handleFilter() {
            onFilter(nameInput.value, typeInput.value, type2Input.value, attackInput, defenseInput);
        }
        nameInput.addEventListener('keyup', handleFilter);
        typeInput.addEventListener('keyup', handleFilter);
        type2Input.addEventListener('keyup', handleFilter);
        attackInput.addEventListener('keyup', handleFilter);
        defenseInput.addEventListener('keyup', handleFilter);

    }
};

export default pokemonFilter;
