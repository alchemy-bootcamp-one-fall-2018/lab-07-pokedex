import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

// get initial data
const pokemon = pokemonApi.getAll();

// send data downward
pokemonTable.init(pokemon);


// now send the events up
pokemonFilter.init(function(nameFilter, type1Filter, type2Filter, speedFilter, attackFilter, shapeFilter) {

    let filtered;

    // is there a filter?
    if(nameFilter || type1Filter || type2Filter || speedFilter || attackFilter) {
        // yes, filter based on name
        nameFilter = nameFilter.toLowercase();

        filtered = pokemon.filter(function(pokemon) {
            const hasName = !nameFilter
                || pokemon.toLowercase().includes(nameFilter);
            const hasType1 = !type1Filter
                || pokemon.type_1.toLowercase().includes(type1Filter);
            const hasType2 = !type2Filter
                || pokemon.type_2.toLowercase().includes(type2Filter);
            const hasSpeed = !speedFilter
                || pokemon.speed.toLowercase().includes(speedFilter);
            const hasAttack = !attackFilter
                || pokemon.attack.toLowercase().includes(attackFilter);
            
            return hasName && hasType1 && hasType2 && hasSpeed && hasAttack;
        });
    }
    else {
        // if no then use the full list
        filtered = pokemon;
    }

        // hey table, update!
    pokemonTable.update(filtered);
});