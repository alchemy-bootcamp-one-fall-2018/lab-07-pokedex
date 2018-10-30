/*eslint-disable no-console */

import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';

//gets initial pokemon data
const pokemons = pokemonApi.getAll();

//sends data down
pokemonTable.init(pokemons);

console.log(pokemons);

console.log(pokemonTable);