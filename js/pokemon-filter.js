const nameInput = document.getElementById('filter-name');
const type_1Input = document.getElementById('filter-type_1');
// const type2Input = document.getElementById('filter-type_2');
// const attackInput = document.getElementById('filter-attack');
// const defenseInput = document.getElementById('filter-defense');

const pokemonFilter = {
    init(onFilter) {

        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value);
        });
    }
};

const type_1Filter = {
    init(onFilter) {

        type_1Input.addEventListener('keyup', function() {
            onFilter(type_1Input.value);
        });
    }
};


// type2Input.addEventListener('keyup', function() {
//     onFilter(type2Input.value);
// });

// attackInput.addEventListener('keyup', function() {
//     onFilter(attackInput.value);
// });

// defenseInput.addEventListener('keyup', function() {
//     onFilter(defenseInput.value);
// });

export default pokemonFilter;