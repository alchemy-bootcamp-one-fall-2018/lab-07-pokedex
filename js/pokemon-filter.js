const nameInput = document.getElementById('filter-name'); 
const defenseInput = document.getElementById('filter-defense');
const attackInput = document.getElementById('filter-attack');
const type1Input = document.getElementById('filter-type1'); 
const abilityInput = document.getElementById('filter-ability'); 

const pokemonsFilter = {
    init(onFilter) {

        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value); 
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
        
        abilityInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, defenseInput.value, attackInput.value, type1Input.value, abilityInput.value);

        });
    }
}; 
export default pokemonsFilter; 