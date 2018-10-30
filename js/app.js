import pokemonsApi from './pokemon-api.js';
import pokemonsTable from './pokemon-table.js';
import pokemonsFilter from './pokemon-filter.js';

const pokemons = pokemonsApi.getAll();

pokemonsTable.init(pokemons);

pokemonsFilter.init(function(typeFilter, nameFilter, attackMinFilter, defenseMinFilter) {
    
    let filtered;

    if(typeFilter || nameFilter || attackMinFilter || defenseMinFilter) {

        typeFilter = typeFilter.toLowerCase();
    
        filtered = pokemons.filter(function(pokemon) {
            const hasType = !typeFilter
                || pokemon.type_1.toLowerCase().includes(typeFilter) 
                || pokemon.type_2.toLowerCase().includes(typeFilter);
 //or if the type 2 is not NA

            const hasName = !nameFilter || pokemon.pokemon.includes(nameFilter);

            const hasAttack = !attackMinFilter || pokemon.attack > attackMinFilter;

            const hasDefense = !defenseMinFilter || pokemon.defense > defenseMinFilter;

            return hasType && hasName && hasAttack && hasDefense;
        });
    }
    else {

        filtered = pokemons;
    }

    pokemonsTable.update(filtered);
});