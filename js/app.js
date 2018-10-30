import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';


// let's get the initial data
const pokemon = pokemonApi.getAll();

// data down!
pokemonTable.init(pokemon);