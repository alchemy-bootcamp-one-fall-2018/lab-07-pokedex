/* eslint-disable no-console */

import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

//get the initial data
const pokemonData = pokemonApi.getAll();

console.log(pokemonData);

//data flows down
pokemonTable.init(pokemonData);
console.log(pokemonTable);

//events up via callback
pokemonFilter.init(function(pokemonFilter, heightFilter, weightFilter, attackFilter, defenseFilter) {
    
    
    let filtered;
    //do we have a filter?
    if(pokemonFilter || heightFilter || weightFilter || attackFilter || defenseFilter) {
        //yes!, filter based on pokemon, height, weight, attack, or defense
        pokemonFilter = pokemonFilter.toLowerCase();
       

        filtered = pokemonData.filter(function(pokemon) {
            const hasPokemon = !pokemonFilter
            || pokemon.pokemon.toLowerCase().includes(pokemonFilter);

            const hasHeight = !heightFilter || pokemon.height >= heightFilter;
            const hasWeight = !weightFilter || pokemon.weight >= weightFilter;

            const hasAttack = !attackFilter || pokemon.attack >= attackFilter;

            const hasDefense = !defenseFilter || pokemon.defense >= defenseFilter;
            return hasPokemon && hasHeight && hasWeight && hasAttack && hasDefense;
        });
    }
            
    else {
        //no! use the full list
        filtered = pokemonData;
    }    

    //tell the table to update
    pokemonTable.update(filtered);
});