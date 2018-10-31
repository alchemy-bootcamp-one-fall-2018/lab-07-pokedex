import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';


// get initial data
const pokemon = pokemonApi.getAll();

// send data downward
pokemonTable.init(pokemon);


// now send the events up
// pokemonFilter.init(function(nameFilter, type1Filter, type2Filter, speedFilter, attackFilter, shapeFilter) {
pokemonFilter.init(function(nameFilter) { //, type1Filter, type2Filter) {

    let filtered;

    // if(nameFilter || type1Filter || type2Filter || speedFilter || attackFilter || shapeFilter) {
    if(nameFilter) { // || type1Filter || type2Filter) {
        // yes, filter based on name

        // nameFilter = nameFilter.toLowercase();
        // type1Filter = type1Filter.toLowercase();
        // type2Filter = type2Filter.toLowercase();

        
        filtered = pokemon.filter(function() {

            const hasName = !nameFilter
             || 'pokemon'.includes(nameFilter);             // NUMBERS DON'T NEED TO LOWERCASE FUNCTION
            // const hasType1 = !type1Filter
            //     || pokemon.type_1.toLowercase().includes(type1Filter);
            // const hasType2 = !type2Filter
            //     || pokemon.type_2.toLowercase().includes(type2Filter);
            // const hasSpeed = !speedFilter
            //     || pokemon.speed.toLowercase().includes(speedFilter);
            // const hasAttack = !attackFilter
            //     || pokemon.attack.toLowercase().includes(attackFilter);
            // const hasShape = !shapeFilter
            // || pokemon.shape.toLowercase().includes(shapeFilter);
            return hasName; // && hasType1 && hasType2 && hasSpeed && hasAttack && hasShape;
        });
    }
    else {
        // if no then use the full list
        filtered = pokemon;
    }

        // hey table, update!
    pokemonTable.update(filtered);
});