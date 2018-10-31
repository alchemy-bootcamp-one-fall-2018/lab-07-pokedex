const nameInput = document.getElementById('filter-name');
// const tagsInput = document.getElementById('filter-tags');

const pokemonFilter = {
    init(onFilter) {

        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value/* , tagsInput.value */);
        });

        // Type_1Input.addEventListener('keyup', function() {
            // onFilter(nameInput.value, tagsInput.value);
        // });
    }
};

export default pokemonFilter;