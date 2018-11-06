import pokeApi from './poke-api.js';
import PokeTable from './pokemon-table.js';
import pokeFilter from './pokemon-filter.js';

const pokemons = pokeApi.getAll();

PokeTable.init(pokemons);

pokeFilter.init((nameFilter, attackFilter, defenseFilter, hpFilter) => {
    let filtered;

    if(nameFilter || attackFilter || defenseFilter || hpFilter){
        nameFilter = nameFilter.toLowerCase();

        filtered = pokemons.filter((pokemon) => {
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
    PokeTable.update(filtered);
});
