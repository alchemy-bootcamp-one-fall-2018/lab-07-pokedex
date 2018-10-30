import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js'; 

const pokemons = pokemonApi.getAll(); 

pokemonTable.init(pokemons); 

