import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js'; 
import pokemonsFilter from './pokemon-filter.js'; 

const pokemons = pokemonApi.getAll(); 

pokemonTable.init(pokemons); 

pokemonsFilter.init(function(nameFilter, defenseFilter, attackFilter, type1Filter, type2Filter){
    let filtered; 

    if(nameFilter || defenseFilter || attackFilter || type1Filter || type2Filter) {
        nameFilter = nameFilter.toLowerCase();
        console.log('type  1', type1Filter); 
     

        filtered = pokemons.filter(function(pokemon){
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter); 
            
            const hasDefense = !defenseFilter || pokemon.defense >= defenseFilter;
            
            const hasAttack = !attackFilter || pokemon.attack >= attackFilter; 
            
            const hasType1 = !type1Filter || pokemon.pokemon.toLowerCase().includes(type1Filter);
            
            const hasType2 = !type2Filter || pokemon.pokemon.toLowerCase().includes(type2Filter); 
             
            return hasName && hasDefense && hasAttack && hasType1 && hasType2; 
        
        }); 
    }
    else {
        filtered = pokemons; 
    }

    pokemonTable.update(filtered); 
}); 

