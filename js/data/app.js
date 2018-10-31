import pokedexApi from './pokedex-api.js';
import pokedexTable from './pokedex-table.js';
import pokedexFilter from './pokedex-filter.js';


//might need filter later 
//import pokedexFilter from './pokedex-filter.js';

const pokedex = pokedexApi.getAll();

pokedexTable.init(pokedex);


// events up! (via callback)
pokedexFilter.init(function(nameFilter) {
    
    let filtered;

    // do we have a filter?
    if(nameFilter) {
        // yes!, filter based on first or last name
        nameFilter = nameFilter.toLowerCase();
    
        filtered = pokedex.filter(function(pokemon) {
            const hasName = !nameFilter
                || pokemon.pokemon.toLowerCase().includes(nameFilter);
               

            return hasName;
        });
    }
    else {
        //no! use the full list
        filtered = pokedex;
    }

    // tell the table to update 
    pokedexTable.update(filtered);
});
