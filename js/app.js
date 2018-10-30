/*eslint-disable no-console */

import pokemonApi from './pokemon-api.js';

//get the initial data
const pokemonData = pokemonApi.getAll();

console.log(pokemonData);