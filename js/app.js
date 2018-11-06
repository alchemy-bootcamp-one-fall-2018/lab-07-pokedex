import pokemonApi from './pokemonapi.js';
import pokemonTable from './pokemon-table.js';
import pokeFilter from './pokemon-filter.js';

const everySinglePokemon = pokemonApi.getAll();
pokemonTable.init(everySinglePokemon);

pokeFilter.init(function(nameFilter, type1Filter, type2Filter, shapeFilter, speedFilter) {
    let filtered;

    if(nameFilter || type1Filter || type2Filter || shapeFilter || speedFilter) {
        nameFilter = nameFilter.toLowerCase();

        filtered = everySinglePokemon.filter(function(poke) {
            const hasName = !nameFilter || poke.pokemon.includes(nameFilter);

            const hasType1 = !type1Filter || poke.type_1.includes(type1Filter);

            const hasType2 = !type2Filter || poke.type_2.includes(type2Filter);

            const hasShape = !shapeFilter || poke.shape.includes(shapeFilter);

            const hasSpeed = !speedFilter || poke.speed.includes(speedFilter);

            return hasName && hasType1 && hasType2 && hasShape && hasSpeed;
        });
}
    else {
        filtered = everySinglePokemon;
    }

    pokemonTable.update(filtered);
});