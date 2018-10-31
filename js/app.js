import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';
import filter from './pokemon-filter.js';

//add images
//make css prettier

const pokemon = pokeApi.getAll();

generateTable.init(pokemon);
filter.init();




