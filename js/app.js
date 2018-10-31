import pokedexTable from './pokemon-table.js';
import pokemonApi from './pokemon-api.js';
import pokemonFilter from './pokemon-filter.js';

const pokemon = pokemonApi.getAll();

pokedexTable.init(pokemon);

pokemonFilter.init(function(type1Filter, type2Filter, baseFilter) {
    
    let filtered;
    if(type1Filter || type2Filter || baseFilter) {
        type1Filter = type1Filter.toLowerCase();
        
        filtered = pokemon.filter(function(pokemun) {
            const hasType1 = !type1Filter
            || pokemun.type_1.toLowerCase().includes(type1Filter);
            
            const hasType2 = !type2Filter
            || pokemun.type_2.toLowerCase().includes(type2Filter);

            const hasBase = !baseFilter
            || pokemun.base_experience <= baseFilter;

            return hasType1 && hasType2 && hasBase;
        });
    }
   
    else {
        filtered = pokemon;
    }

    pokedexTable.update(filtered);
    
});