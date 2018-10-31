const nameInput = document.getElementById('filter-name');

const pokemonFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value);
        });
    }
};

export default pokemonFilter;