import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';

const pokedex = pokemonApi.getAll();

pokemonTable.init(pokedex);



