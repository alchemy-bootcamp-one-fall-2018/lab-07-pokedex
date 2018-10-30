import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';
import pokemonApi from './pokemon-api.js';

pokemonTable.init();

pokemonFilter.init();

console.table(pokemonApi.getAll());

