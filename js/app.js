import pokedexTable from './pokemon-table.js';
import pokemonApi from './pokemon-api.js';

const pokemon = pokemonApi.getAll();

pokedexTable.init(pokemon);

pokedexFilter.init(function(???)) {
    
    let filtered;
    
}