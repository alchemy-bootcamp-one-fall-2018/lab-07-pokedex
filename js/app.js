import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';


// let's get the initial data
const pokemon = pokemonApi.getAll();

// data down!
pokemonTable.init(pokemon);

// events up! (via callback)
pokemonFilter.init(function(type1Filter, type2Filter, attackFilter, ability1Filter,eggGroup1Filter) {
    
    let filtered;

  // do we have a filter?
    if(type1Filter || type2Filter || attackFilter || ability1Filter || eggGroup1Filter) {
      // yes!, filter based on type1 or type2 or attack
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();
        ability1Filter = ability1Filter.toLowerCase();
        eggGroup1Filter = ability1Filter.toLowerCase();
  
        filtered = pokemon.filter(function(pokemon) {
            const hasType1 = !type1Filter
              || pokemon.type_1.toLowerCase().includes(type1Filter); 

            const hasType2 = !type2Filter 
              || pokemon.type_2.toLowerCase().includes(type2Filter);
              
            const hasAttack = !attackFilter 
              || pokemon.attack <= attackFilter;
              
            const hasAbility1 = !ability1Filter 
                || pokemon.ability_1.toLowerCase().includes(ability1Filter);

            const hasEggGroup1 = !ability1Filter 
                || pokemon.egg_group_1.toLowerCase().includes(eggGroup1Filter);


            return hasType1 && hasType2 && hasAttack && hasAbility1 && hasEggGroup1;
        });
    }
    else {
      //no! use the full list
        filtered = pokemon;
    }

  // tell the table to update 
    pokemonTable.update(filtered);
});


