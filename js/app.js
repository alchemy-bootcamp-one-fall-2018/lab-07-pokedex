/* eslint-disable no-console */

import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';

//get the initial data
const pokemonData = pokemonApi.getAll();

console.log(pokemonData);

//data flows down
pokemonTable.init(pokemonData);
console.log(pokemonTable);