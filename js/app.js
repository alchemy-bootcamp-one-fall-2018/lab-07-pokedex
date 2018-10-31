import pokemonApi from './pokemon-Api.js';
import pokemonTable from './pokemon-table.js';

const pokemons = pokemonApi.getAll();
// console.log(pokemons);

pokemonTable.init(pokemons);