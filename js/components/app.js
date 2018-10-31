import pokemonApi from '../pokemon-api.js';
import pokemonTable from './pokemon-table.js';
//import pokemonFilter from './pokemon-filter';

const pokemon = pokemonApi.getAll();

pokemonTable.init(pokemon);

