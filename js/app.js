import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';
import pokemonApi from './pokemon-api.js';

const mondoPokemon = pokemonApi.getAll();

pokemonTable.init(mondoPokemon);



pokemonFilter.init();
pokemonApi.getAll();

