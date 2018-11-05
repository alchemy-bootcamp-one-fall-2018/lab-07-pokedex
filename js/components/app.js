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

            const hasType1 = !type1Filter || pokemon.type_1.toLowerCase().includes(type1Filter);

            const hasType2 = !type2Filter || pokemon.type_2.toLowerCase().includes(type2Filter);

            const hasSpeed = !speedFilter || pokemon.speed >= speedFilter;

            return hasPokemon && hasAttack && hasType1 && hasType2 && hasSpeed;

        });

    }
    else {
        filtered = pokemons;
    }
    pokemonTable.update(filtered);

});



