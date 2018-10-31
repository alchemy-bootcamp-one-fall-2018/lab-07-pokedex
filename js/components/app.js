import pokemonApi from '../pokemon-api.js';
import pokeTable from './poke-table.js';
import pokeFilter from './poke-filter.js';

const pokemons = pokemonApi.getAll();
//console.log(pokemon); This confirms we are pooling in api data in console only

//send the data down to the app
pokeTable.init(pokemons);

//events up via callbacks in this case keyup
pokeFilter.init(function(nameFilter, type01Filter, type02Filter, hpFilterMin, hpFilterMax, attackFilterMin, attackFilterMax){

    let filtered;

    // do we have a filter?
    if(nameFilter || type01Filter || type02Filter || hpFilterMin || hpFilterMax || attackFilterMin || attackFilterMax) {
        // almost!, filter only works for name, type 1, type 2
        nameFilter = nameFilter.toLowerCase();

        filtered = pokemons.filter(function(pokemon) {
            const hasName = !nameFilter
                || pokemon.pokemon.toLowerCase().includes(nameFilter); 
            const hasType01 = !type01Filter 
                || pokemon.type_1.includes(type01Filter);
            const hasType02 = !type02Filter 
                || pokemon.type_2.includes(type02Filter);
            const hasHpMin = !hpFilterMin
                || pokemon.hp > hpFilterMin;
            const hasHpMax = !hpFilterMin
                || pokemon.hp < hpFilterMax;
            const hasAttackMin = !attackFilterMin
                || pokemon.attack > attackFilterMin;
            const hasAttackMax = !attackFilterMax
                || pokemon.attack < attackFilterMax;
            

            return hasName && hasType01 && hasType02 && hasHpMin && hasHpMax && hasAttackMin && hasAttackMax;
        });
    }
    else {
        //if no! use the full list
        filtered = pokemons;
    }

// tell the table to update 
    pokeTable.update(filtered);
});