import pokedexApi from './pokemonApi.js';
import pokemonTable from './pokemon-table.js';

const pokemon = pokedexApi.getAll();

pokemonTable.init(pokemon);
