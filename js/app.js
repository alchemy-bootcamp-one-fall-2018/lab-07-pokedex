import pokeApi from './poke-api.js';
import pokeTable from './pokemon-table.js';
import pokeFilter from './pokemon-filter.js';


// events up, data down!
const pokemons = pokeApi.getAll();
pokeTable.init(pokemons);
pokeFilter.init(function(nameFilter, attackFilter, defenseFilter, hpFilter)
{
    let filtered;
    
    // if, else statements

    if(nameFilter || attackFilter || defenseFilter || hpFilter){
        nameFilter = nameFilter.toLowerCase();
        filtered = pokemons.filter(function(pokemon){
            const hasName = !nameFilter
            || pokemon.pokemon.includes(nameFilter);
            
            const hasAttack = pokemon.attack >= attackFilter ? pokemon : !attackFilter;
            const hasDefense = pokemon.defense >= defenseFilter ? pokemon : !defenseFilter;
            const hasHp = pokemon.hp >= hpFilter ? pokemon : !hpFilter;
            return hasName && hasAttack && hasDefense && hasHp;
        });
    }
    else {
        filtered = pokemons;
    }
    
    pokeTable.update(filtered);
});