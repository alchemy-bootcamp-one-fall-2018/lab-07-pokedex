import pokeApi from './pokemon-api.js';
import generateTable from './poke-table.js';
import filter from './pokemon-filter.js';

//add images
//make css prettier
//add headings for columns

const pokemon = pokeApi.getAll();

generateTable.init(pokemon);
filter.init();




