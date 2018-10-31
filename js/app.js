import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js'; 
import pokemonsFilter from './pokemon-filter.js'; 

const pokemons = pokemonApi.getAll(); 

pokemonTable.init(pokemons); 

pokemonsFilter.init(function(nameFilter, defenseFilter, attackFilter, type1Filter, abilityFilter) {
    let filtered; 

    if(nameFilter || defenseFilter || attackFilter || type1Filter || abilityFilter) {
        nameFilter = nameFilter.toLowerCase(); 
     

        filtered = pokemons.filter(function(pokemon){
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter); 
            
            const hasDefense = !defenseFilter || pokemon.defense >= defenseFilter;
            
            const hasAttack = !attackFilter || pokemon.attack >= attackFilter; 
            
            const hasType1 = !type1Filter || pokemon.type_1.toLowerCase().includes(type1Filter);
            
            const hasAbility = !abilityFilter || pokemon.ability_1.toLowerCase().includes(abilityFilter); 
             
            return hasName && hasDefense && hasAttack && hasType1 && hasAbility; 
        
        }); 
    }
    else {
        filtered = pokemons; 
    }

    pokemonTable.update(filtered); 
}); 

