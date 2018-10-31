import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';

const pokemons = pokemonApi.getAll();
//console.log(pokemons);

pokemonTable.init(pokemons);