import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js'; 
import pokemonsFilter from './pokemon-filter.js'; 

const pokemons = pokemonApi.getAll(); 

pokemonTable.init(pokemons); 

pokemonsFilter.init(function(nameFilter, tagsFilter){
    let filtered; 

    if (nameFilter) {
        nameFilter = nameFilter.toLowerCase(); 

        // console.log(nameFilter); 

        filtered = pokemons.filter(function(pokemon){
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter); 
            
        // const hasTag = !tagsFilter || pokemon.

            return hasName; 
        
        }); 
    }
    else {
        filtered = pokemons; 
    }

    pokemonTable.update(filtered); 
}); 

