import pokemonApi from './pokemonapi.js';
import pokemonTable from './pokemon-table.js';
import pokeFilter from './pokemon-filter.js';
//did the dash cause bug

const everySinglePokemon = pokemonApi.getAll();

pokeFilter.init();
pokemonTable.init(everySinglePokemon);





