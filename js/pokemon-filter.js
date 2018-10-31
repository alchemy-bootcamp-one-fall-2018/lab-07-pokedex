const nameInput = document.getElementById('filter-name'); 
const defenseInput = document.getElementById('filter-defense');
const attackInput = document.getElementById('filter-attack');
const type1Input = document.getElementById('filter-type1'); 
const type2Input = document.getElementById('filter-type2'); 

const pokemonsFilter = {
    init(onFilter) {

        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, defenseInput.value); 
        }); 

        defenseInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, defenseInput.value); 
        }); 
        
        attackInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, defenseInput.value, attackInput.value); 
        }); 

        type1Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, defenseInput.value, attackInput.value, type1Input.value); 
        });
        
        type2Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, defenseInput.value, attackInput.value, type1Input.value, type1Input);

        });
    }
}; 
export default pokemonsFilter; 