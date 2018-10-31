import pokemonApi from './pokemon-api.js';
import pokemonsTable from './pokemon-table.js';

const pokemons = pokemonApi.getAll();

pokemonsTable.init(pokemons);

pokemonsFilter.init(function(nameFilter){
    let filtered;

    if(nameFilter) {
        nameFilter = nameFilter.toLowerCase();   //filters based on name (pokemon.pokemon)
    }
})
