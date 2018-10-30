import pokeApi from './pokemon-api.js';
import pokeFilter from './pokemon-filter.js';
import pokeTable from './pokemon-table.js';

const pokemon = pokeApi.getAll();

pokeTable.init(pokemon);

pokeFilter.init(function(pokemonFilter, type1Filter, type2Filter, speedFilter, hpFilter) {

});