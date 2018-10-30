import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';


// let's get the initial data
const pokemon = pokemonApi.getAll();

// data down!
pokemonTable.init(pokemon);

// events up! (via callback)
pokemonFilter.init(function(type1Filter, type2Filter) {
    
    let filtered;

  // do we have a filter?
    if(type1Filter || type2Filter) {
      // yes!, filter based on type1 or type2
        type1Filter = type1Filter.toLowerCase();
  
        filtered = pokemon.filter(function(pokemon) {
            const hasType1 = !type1Filter
              || pokemon.type_1.toLowerCase().includes(type1Filter); 

            const hasType2 = !type2Filter || pokemon.type_2.includes(type2Filter);

            return hasType1 && hasType2;
        });
    }
    else {
      //no! use the full list
        filtered = pokemon;
    }

  // tell the table to update 
    pokemonTable.update(filtered);
});


