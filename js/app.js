import pokeApi from './poke-api.js';
import pokeTable from './pokemon-table.js';

const pokemons = pokeApi.getAll();

pokeTable.init(pokemons);

