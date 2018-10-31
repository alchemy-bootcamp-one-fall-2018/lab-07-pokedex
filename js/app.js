import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';


// get initial data
const pokemon = pokemonApi.getAll();

// send data downward
pokemonTable.init(pokemon);


// now send the events up
// pokemonFilter.init(function(nameFilter, type1Filter, type2Filter, speedFilter, attackFilter, shapeFilter) {
pokemonFilter.init(function(nameFilter, type1Filter, type2Filter, shapeFilter) {

    let filtered;

    if(nameFilter || type1Filter || type2Filter || shapeFilter) {

        nameFilter = nameFilter.toLowerCase();
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();
        shapeFilter = shapeFilter.value;

        filtered = pokemon.filter(function(pokemon) {

            const hasName = !nameFilter
                || pokemon.pokemon.toLowerCase().includes(nameFilter);
            const hasType1 = !type1Filter 
                || pokemon.type_1.toLowerCase().includes(type1Filter);
            const hasType2 = !type2Filter
                || pokemon.type_2.toLowerCase().includes(type2Filter);
            const hasShape = !shapeFilter
                || pokemon.shape.includes(shapeFilter);
            // const hasSpeed = !speedFilter
            //     || pokemon.speed. --?-- .includes(speedFilter);
            // const hasAttack = !attackFilter
            //     || pokemon.attack. --?-- .includes(attackFilter);
            return hasName && hasType1 && hasType2 && hasShape;
        });
    }
    else {
        // if no then use the full list
        filtered = pokemon;
    }

        // hey table, update!
    pokemonTable.update(filtered);
});