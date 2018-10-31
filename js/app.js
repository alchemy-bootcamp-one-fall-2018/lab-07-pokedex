import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';


// get initial data
const pokemon = pokemonApi.getAll();

// send data downward
pokemonTable.init(pokemon);

var noResultsResponse = document.getElementById(['no-results']);
var headers = document.getElementById('column-headings');

// now send the events up
pokemonFilter.init(function(nameFilter, type1Filter, type2Filter, shapeFilter, speedFilter, attackFilter) {

    let filtered;

    if(nameFilter || type1Filter || type2Filter || shapeFilter || speedFilter || attackFilter) {

        nameFilter = nameFilter.toLowerCase();
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();
        shapeFilter = shapeFilter.value;
        speedFilter = speedFilter.value;
        attackFilter = attackFilter.value;

        filtered = pokemon.filter(function(pokemon) {

            const hasName = !nameFilter
                || pokemon.pokemon.toLowerCase().includes(nameFilter);
            const hasType1 = !type1Filter 
                || pokemon.type_1.toLowerCase().includes(type1Filter);
            const hasType2 = !type2Filter
                || pokemon.type_2.toLowerCase().includes(type2Filter);
            const hasShape = !shapeFilter
                || pokemon.shape.includes(shapeFilter);
            const hasSpeed = !speedFilter
                || pokemon.speed >= speedFilter;
            const hasAttack = !attackFilter
                || pokemon.attack >= attackFilter;

            return hasName && hasType1 && hasType2 && hasShape && hasSpeed && hasAttack;
        });
    }
    if(filtered.length === 0) {
        noResultsResponse.innerHTML = 'No matching results';
        headers.classList.add('hidden');
        // else  {
        //     noResultsResponse.classList.add('hidden');
        //     headers.classList.remove('hidden');
        // }
    }
    else {
        // if no then use the full list
        filtered = pokemon;
    }

        // hey table, update!
    pokemonTable.update(filtered);
});