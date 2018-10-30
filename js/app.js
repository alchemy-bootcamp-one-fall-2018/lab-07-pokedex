import pokedexApi from './pokemonApi.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './filterPokemon.js';


//grabs all the data from our API JS folder, Which grabs all the info from out data file
const pokemon = pokedexApi.getAll();


//this callback function calls upon the pokemon-table file 
//the init portion references an object(or function) that iterates through all the data and creates/appends the data to the HTML doc
// basically saying grab this object(PokemonTable) and run function(init) and pass the init function some parameters(pokemon) or data(pokemon) 
//Pokemon is a method references our API component that goes and grabs all the data from our API as stated above.

pokemonTable.init(pokemon);


// This callback function calls upon the filter file
// pokemonFilter a Variable that when contains a function becomes an object
// Go grab this object
// within this object run the init function/method
// Provide this method or function with some parameters 
// aka the Pokemon variable which is linked to ALL OUR DATA in the API
//onFilter uses eventListener to track the KEYUP from the user
//
pokemonFilter.init(function(name) {

console.log('filter on', name);

});
