/*eslint-disable no-console */

import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';

const pokemon = pokemonApi.getAll();

console.log(pokemon);