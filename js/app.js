import pokemonApi from './components/pokemon-api.js';
import pokemonTable from './components/pokemon-table.js';


// get inital data
const pokemon = pokemonApi.getAll();

pokemonTable.init(pokemon);

pokemonFilter.init