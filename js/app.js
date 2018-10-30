/*eslint-disable no-console */

import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

//gets initial pokemon data
const pokemons = pokemonApi.getAll();

//sends data down
pokemonTable.init(pokemons);

pokemonFilter.init(function(nameFilter, typeFilter, attackFilter, weightFilter, heightFilter) {

    let filtered;

    if(nameFilter || typeFilter || attackFilter || )

}

console.log(pokemons);

console.log(pokemonTable);

console.log(pokemonFilter.init());