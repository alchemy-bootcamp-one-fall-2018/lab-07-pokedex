import pokemonApi from './pokemon-api.js';
import pokemonsTable from './pokemon-table.js';

const pokemons = pokemonApi.getAll();

pokemonsTable.init(pokemons);

//console.log('this is', pokemons);
