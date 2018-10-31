const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const hpMinInput = document.getElementById('filter-min-hp');
const hpMaxInput = document.getElementById('filter-max-hp');
const atkMinInput = document.getElementById('filter-min-atk');
const atkMaxInput = document.getElementById('filter-max-atk');
const defMinInput = document.getElementById('filter-min-def');
const defMaxInput = document.getElementById('filter-max-def');
const spatkMinInput = document.getElementById('filter-min-spatk');
const spatkMaxInput = document.getElementById('filter-max-spatk');
const spdefMinInput = document.getElementById('filter-min-spdef');
const spdefMaxInput = document.getElementById('filter-max-spdef');
const speedMinInput = document.getElementById('filter-min-speed');
const speedMaxInput = document.getElementById('filter-max-speed');


const pokedexFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
        
        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });

        hpMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
        
        hpMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });

        atkMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
        
        atkMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });

        defMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
        
        defMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });

        spatkMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
        
        spatkMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });

        spdefMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
        
        spdefMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });

        speedMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
        
        speedMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value,
                speedMinInput.value, speedMaxInput.value);
        });
    }
};

export default pokedexFilter;