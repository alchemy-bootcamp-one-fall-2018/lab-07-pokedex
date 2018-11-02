import pokemonApi from '../js/pokemon-api.js';
import pokeTable from '../js/pokemon-table.js';
import pokemonFilter from '../js/pokemon-filter.js';

const pokemon = pokemonApi.getAll();

pokeTable.init(pokemon);

pokemonFilter.init(function(nameFilter, type_1Filter) {
    let filtered;

    if(nameFilter || type_1Filter) {

        filtered = pokemon.filter(function(pokemon) {
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter);

            const hasType_1 = !type_1Filter
            || pokemon.type_1.toLowerCase().includes(type_1Filter);

            return hasName && hasType_1;
        });
    }

    else {
        filtered = pokemon;
    }
    pokeTable.update(filtered);
});