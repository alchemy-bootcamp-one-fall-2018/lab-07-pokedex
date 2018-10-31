import pokemonApi from '../js/pokemon-api.js';
import pokeTable from '../js/pokemon-table.js';
import pokemonFilter from '../js/pokemon-filter.js';

const pokemon = pokemonApi.getAll();

pokeTable.init(pokemon);

pokemonFilter.init(function(nameFilter, tagsFilter) {
    let filtered;

    if(nameFilter || tagsFilter) {
        nameFilter = nameFilter.toLowerCase();

        filtered = pokemon.filter(function(pokemon) {
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter);

            return hasName;
        });
    }
    else {
        filtered = pokemon;
    }
    pokeTable.update(filtered);
});

