import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonsFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();

pokemonTable.init(pokemons);

pokemonsFilter.init(function(pokemonFilter, attackFilter, type1Filter, type2Filter, speedFilter) {

    let filtered;

    if(pokemonFilter || attackFilter || type1Filter || type2Filter || speedFilter) {
        pokemonFilter = pokemonFilter.toLowerCase();

        filtered = pokemons.filter(function(pokemon) {
            const hasPokemon = !pokemonFilter
                || pokemon.pokemon.toLowerCase().includes(pokemonFilter);

            const hasAttack = !attackFilter || pokemon.attack >= attackFilter;

            return hasPokemon && hasAttack;

        });

    }
    else {
        filtered = pokemons;
    }
    pokemonTable.update(filtered);

});



