import pokedexTable from './pokemon-table.js';
import pokemonApi from './pokemon-api.js';
import pokemonFilter from './pokemon-filter.js';

const pokemon = pokemonApi.getAll();

pokedexTable.init(pokemon);

pokemonFilter.init(function(pokemonFilter, type1Filter, type2Filter, baseFilter, ability_hiddenFilter) {
    
    let filtered;
    if(pokemonFilter || type1Filter || type2Filter || baseFilter || ability_hiddenFilter) {
        pokemonFilter = pokemonFilter.toLowerCase();
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();
        ability_hiddenFilter = ability_hiddenFilter.toLowerCase();
        
        filtered = pokemon.filter(function(pokemun) {
            const hasPokemon = !pokemonFilter
            || pokemun.pokemon.toLowerCase().includes(pokemonFilter);

            const hasType1 = !type1Filter
            || pokemun.type_1.toLowerCase().includes(type1Filter);
            
            const hasType2 = !type2Filter
            || pokemun.type_2.toLowerCase().includes(type2Filter);

            const hasBase = !baseFilter
            || pokemun.base_experience >= baseFilter;

            const hasAbility_hidden = !ability_hiddenFilter
            || pokemun.ability_hidden.toLowerCase().includes(ability_hiddenFilter);

            return hasPokemon && hasType1 && hasType2 && hasBase && hasAbility_hidden;
        });
    }
   
    else {
        filtered = pokemon;
    }

    pokedexTable.update(filtered);
    
});