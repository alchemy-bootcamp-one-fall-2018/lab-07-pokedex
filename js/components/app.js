import pokemonApi from '../pokemon-api.js';
import pokemonsTable from './pokemon-table.js';
import pokemonsFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();

pokemonsTable.init(pokemons);

pokemonsFilter.init(function(nameFilter, type1Filter, type2Filter, attackFilter, hpFilter) {
    let filtered;

    if(nameFilter || type1Filter || type2Filter || attackFilter || hpFilter) {
        nameFilter = nameFilter.toLowerCase();
    
        filtered = pokemons.filter(function(pokemon) {
            const hasName = !nameFilter
            || pokemon.pokemon.toLowerCase().includes(nameFilter);
            const hasType1 = !type1Filter || pokemon.type_1.includes(type1Filter);
            const hasType2 = !type2Filter || pokemon.type_2.includes(type2Filter);
            const hasAttack = !attackFilter || pokemon.attack > attackFilter;
            const hasHP = !hpFilter || pokemon.hp > hpFilter;

            return hasName && hasType1 && hasType2 && hasAttack && hasHP;
        });
    } else {
        filtered = pokemons;
    }
// will only show filtered pokemon
    pokemonsTable.update(filtered);
});
