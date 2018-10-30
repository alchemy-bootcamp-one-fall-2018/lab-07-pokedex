import pokemonApi from '../pokemon-api.js';
// import table from './table.js';
// import filter from './filter.js';

const pokemon = pokemonApi.getAll();
console.log(pokemon);