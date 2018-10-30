import pokemonApi from '../js/pokemon-api.js';
import pokeTable from '../js/pokemon-table.js';

const pokemon = pokemonApi.getAll();

pokeTable.init(pokemon);

