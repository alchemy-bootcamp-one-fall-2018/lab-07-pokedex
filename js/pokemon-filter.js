const nameInput = document.getElementById('filter-name'); 

const pokemonsFilter = {
    init(onFilter) {

        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value); 
        }); 
    }
};

export default pokemonsFilter; 