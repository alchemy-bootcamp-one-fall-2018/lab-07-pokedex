import pokemonApi from './pokemon-api.js';
import pokemonsTable from './pokemon-table.js';
import pokemonsFilter from './pokemon-filter.js';
import pokemonCount from './pokemon-count.js';

const pokemons = pokemonApi.getAll();

pokemonsTable.init(pokemons);    //data down

pokemonCount.init(pokemons.length, '');

//data down
pokemonsFilter.init(function(pokemonFilter, typeFilter) {
        
    let filtered;
        
    if(pokemonFilter || typeFilter) {
               
        filtered = pokemons.filter(function(pokemon) { 
            const hasPokemon = !pokemonsFilter || pokemon.pokemon.includes(pokemonFilter);
            const hasType = !typeFilter 
                || pokemon.type_1.includes(typeFilter)
                || pokemon.type_2.includes(typeFilter);
              
            return hasPokemon && hasType;

        }); 
    } else {
        filtered = pokemons;
    }    
            
    pokemonsTable.update(filtered);
    pokemonCount.update(filtered.length, pokemonFilter);
});