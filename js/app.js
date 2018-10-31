import pokeApi from './pokemon-api.js';
import pokeFilter from './pokemon-filter.js';
import pokeTable from './pokemon-table.js';

const pokedex = pokeApi.getAll();

pokeTable.init(pokedex);
// my contact/contacts are both pokemon!
pokeFilter.init(function(nameFilter, type_1Filter, type_2Filter, speedFilter, hpFilter) {
    let filtered; //changed all pokemonfilter, type1filter, type2filter, speedfilter, and hpfilter to pokemon-filter vars

    if(nameFilter || type_1Filter || type_2Filter || speedFilter || hpFilter) {
        nameFilter = nameFilter.toLowerCase();
        type_1Filter = type_1Filter.toLowerCase();
        type_2Filter = type_2Filter.toLowerCase();
        speedFilter = speedFilter.toLowerCase();
        hpFilter = hpFilter.toLowerCase();
//all apokemon were originally "pokemon" also in p-table
        filtered = pokedex.filter(function(pokemons) { //////error here (in console)
            const hasPokemon = !nameFilter
            || pokemons.pokemon.toLowerCase().includes(nameFilter);
            const hasType1 = !type_1Filter
            || pokemons.type_1Filter.toLowerCase().includes(type_1Filter); // error here
            const hasType2 = !type_2Filter
            || pokemons.type_2Filter.toLowerCase().includes(type_2Filter); // error here
            const hasSpeed = !speedFilter
            || pokemons.speedFilter.toLowerCase().includes(speedFilter);   // error here
            const hasHp = !hpFilter
            || pokemons.hpFilter.toLowerCase().includes(hpFilter);            // error here

            return hasPokemon && hasType1 && hasType2 && hasSpeed && hasHp;
        });
    }
    else {
        filtered = pokedex;
    }
    pokeTable.update(filtered);
});