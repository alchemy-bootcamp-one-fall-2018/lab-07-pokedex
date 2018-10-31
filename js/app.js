import pokemonApi from '../js/pokemon-api.js';
import pokeTable from '../js/pokemon-table.js';
import pokemonFilter from '../js/pokemon-filter.js';

const pokemon = pokemonApi.getAll();

pokeTable.init(pokemon);

pokemonFilter.init(function(nameFilter, type_1Filter) {
    let filtered;

    if(nameFilter || type_1Filter) {
        nameFilter = nameFilter.toLowerCase();

        filtered = pokemon.filter(function(pokemon) {
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter);

            const hasType_1 = !type_1Filter
            || type_1.type_1.toLowerCase().includes(type_1Filter);

            return hasName;
        });
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

type_1Filter.init(function(type_1Filter) {
    let filtered;

    if(type_1Filter) {
        type_1Filter = type_1Filter.toLowerCase();
        filtered = type_1.filter(function(type_1) {
            const hasType_1 = !type_1Filter
            || type_1.type_1.toLowerCase().includes(type_1Filter);

            return hasType_1;
        });
        filtered = type_1.filtetype1Filterr(function(type_1) {
            const hasType_1 = !type_1Filter
                || type_1.type_1.toLowerCase().includes(type_1Filter);
    
            return hasType_1;
        });
    }
    else {
        filtered = Type_1;
    }
    pokeTable.update(filtered);
});


// if(type2Filter, attackFilter, defenseFilter) {
    // nameFilter = nameFilter.toLowerCase();

