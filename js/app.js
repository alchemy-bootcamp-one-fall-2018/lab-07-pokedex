import pokemonApi from './pokemonapi.js';
import pokemonTable from './pokemon-table.js';
import pokeFilter from './pokemon-filter.js';

const everySinglePokemon = pokemonApi.getAll();

pokemonTable.init(everySinglePokemon);
pokeFilter.init();





