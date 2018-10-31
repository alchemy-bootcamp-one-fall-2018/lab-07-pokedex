import pokemonApi from './pokemon-api.js';
import pokemonsTable from './pokemon-table.js';
import pokemonsFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();

pokemonsTable.init(pokemons);    //data down

//data down
 pokemonsFilter.init(function(pokemonFilter, type_1Filter, 
    type_2Filter, hpFilter, ability_1Filter, ability_2Filter, 
    ability_hiddenFilter) {
        
        let filtered;
        
        if(pokemonFilter || type_1Filter || type_2Filter 
            || hpFilter || ability_1Filter || ability_2Filter
            ||ability_hiddenFilter) {
               
                filtered = pokemons.filter(function(pokemon) {
                    const hasPokemon = !pokemonsFilter || pokemon.  
                });
            }   
});
