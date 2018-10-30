/*eslint-disable no-console */

import pokemonApi from './pokemon-api.js';

const pokemon = pokemonApi.getAll();

console.log(pokemon);