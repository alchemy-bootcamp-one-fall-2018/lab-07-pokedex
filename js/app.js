import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';
import pokemonApi from './pokemon-api.js';


const everySinglePokemon = pokemonApi.getAll();


pokemonTable.init(everySinglePokemon);



pokemonFilter.init(function(type1Filter, type2Filter) {
    let filtered;
    if(type1Filter || type2Filter) {
        filtered = everySinglePokemon.filter(function(singlePokemon) {
            const hasType1 = !type1Filter || singlePokemon.type_1.includes(type1Filter);
            const hasType2 = !type2Filter || singlePokemon.type_2.includes(type2Filter);

            return hasType1 && hasType2;
        });
    }
    else {
        filtered = everySinglePokemon;
    }
    pokemonTable.update(filtered);
});
