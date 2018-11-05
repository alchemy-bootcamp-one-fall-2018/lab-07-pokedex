import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';
import pokemonApi from './pokemon-api.js';

// retrieve initial data
const mondoPokemon = pokemonApi.getAll();

// data down
pokemonTable.init(mondoPokemon);

// events up
pokemonFilter.init(function(
    filterName,
    filterType1,
    filterType2,
    filterAttack,
    filterDefense,
    filterSpeed
) {
    let filtered;

    if(filterName || filterType1 || filterType2 || filterAttack || filterDefense || filterSpeed) {
        filterName = filterName.toLowerCase();

        filtered = mondoPokemon.filter(function(pokemon) {
            const hasName = !filterName
                || pokemon.pokemon.toLowerCase().includes(filterName);

            const hasType1 = !filterType1
            || pokemon.type_1.toLowerCase().includes(filterType1);
            
            const hasType2 = !filterType2
            || pokemon.type_2.toLowerCase().includes(filterType2);

            const hasAttack = !filterAttack
            || pokemon.attack >= filterAttack;

            const hasDefense = !filterDefense
            || pokemon.defense >= filterDefense;

            const hasSpeed = !filterSpeed
            || pokemon.speed >= filterSpeed;

            return hasName && hasType1 && hasType2 && hasAttack && hasDefense && hasSpeed;
        });
    }
    else {
        filtered = mondoPokemon;
    }
    pokemonTable.update(filtered);
});
