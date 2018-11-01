import pokedexApi from './pokedex-api.js';
import pokedexTable from './pokedex-table.js';
import pokedexFilter from './pokedex-filter.js';

const pokedex = pokedexApi.getAll();

pokedexTable.init(pokedex);


// events up! (via callback)
pokedexFilter.init(function(nameFilter) {
    
    let filtered;


    if(nameFilter) {
        // yes!, filter based on first or last name
        nameFilter = nameFilter.toLowerCase();
    
        filtered = pokedex.filter(function(pokemon) {
            const hasName = !nameFilter
                || pokemon.name.toLowerCase().includes(nameFilter);
               

            return hasName;
        });
    }
    else {
        filtered = pokedex;
    }


    pokedexTable.update(filtered);
});
