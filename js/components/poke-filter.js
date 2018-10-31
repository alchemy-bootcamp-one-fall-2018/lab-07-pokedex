const nameInput = document.getElementById('filter-name');
const type01Input = document.getElementById('filter-type-01');
const type02Input = document.getElementById('filter-type-02');
const hpInputMin = document.getElementById('filter-hp-min');
const hpInputMax = document.getElementById('filter-hp-max');
const attackInputMin = document.getElementById('filter-attack-min');
const attackInputMax = document.getElementById('filter-attack-max');

const pokeFilter = {
    // what does this component need from parent?
    init(onFilter) {

        
        // on keypress event, call the onFilter 
        // callback with current value of the input
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, type01Input.value, type02Input.value, hpInputMin.value, hpInputMax.value, attackInputMin.value, attackInputMax.value);
        });
        type01Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type01Input.value, type02Input.value, hpInputMin.value, hpInputMax.value, attackInputMin.value, attackInputMax.value); 
        });
        type02Input.addEventListener('keyup', function() {
            onFilter(nameInput.value, type01Input.value, type02Input.value, hpInputMin.value, hpInputMax.value, attackInputMin.value, attackInputMax.value);
        });
        hpInputMin.addEventListener('keyup', function() {
            onFilter(nameInput.value, type01Input.value, type02Input.value, hpInputMin.value, hpInputMax.value, attackInputMin.value, attackInputMax.value);
        });
        hpInputMax.addEventListener('keyup', function() {
            onFilter(nameInput.value, type01Input.value, type02Input.value, hpInputMin.value, hpInputMax.value, attackInputMin.value, attackInputMax.value);
        });
        attackInputMin.addEventListener('keyup', function() {
            onFilter(nameInput.value, type01Input.value, type02Input.value, hpInputMin.value, hpInputMax.value, attackInputMin.value, attackInputMax.value);
        });
        attackInputMax.addEventListener('keyup', function() {
            onFilter(nameInput.value, type01Input.value, type02Input.value, hpInputMin.value, hpInputMax.value, attackInputMin.value, attackInputMax.value);
        });

        // same as above, but with single listening function:

        // function handleFilter() {
        //     onFilter(nameInput.value, type01Input.value, type02Input.value, hpInput.value, attackInput.value);
        // }
        // nameInput.addEventListener('keyup', handleFilter);
        // type01Input.addEventListener('keyup', handleFilter);
        // type02Input.addEventListener('keyup', handleFilter);
        // hpInputMin.addEventListener('keyup', handleFilter);
        // attackInputMin.addEventListener('keyup', handleFilter);
        // hpInputMax.addEventListener('keyup', handleFilter);
        // attackInputMax.addEventListener('keyup', handleFilter);
    }
};

export default pokeFilter;
