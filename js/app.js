import pokemonApi from './pokemon-Api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();
// console.log(pokemons);

pokemonTable.init(pokemons);

pokemonFilter.init(function(pokemonFilter, defenseFilter, attackFilter, type1Filter, type2Filter) {
    
    let filtered;

    if(pokemonFilter || defenseFilter || attackFilter || type1Filter || type2Filter) {
        pokemonFilter = pokemonFilter.toLowerCase();
        defenseFilter = defenseFilter.toLowerCase();
        attackFilter = attackFilter.toLowerCase();
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();

            filtered = pokemons.filter(function(pokemon) {
                const hasPokemon = !pokemonFilter
                    || pokemon.pokemon.toLowerCase().includes(pokemonFilter);
                const     
            });
        }
});