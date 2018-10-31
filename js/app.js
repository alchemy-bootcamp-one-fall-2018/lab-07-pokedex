import pokemonApi from './pokemon-Api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();
// console.log(pokemons);

pokemonTable.init(pokemons);

pokemonFilter.init(function(pokemonFilter, defenseFilter, attackFilter, type1Filter, type2Filter) {
    
    let filtered;

    if(pokemonFilter || defenseFilter || attackFilter || type1Filter || type2Filter) {
        pokemonFilter = pokemonFilter.toLowerCase();
        defenseFilter = defenseFilter.toLowerCase();
        attackFilter = attackFilter.toLowerCase();
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();

        filtered = pokemons.filter(function(pokemon) {
            const hasPokemon = !pokemonFilter
                || pokemon.pokemon.toLowerCase().includes(pokemonFilter);
            const hasDefense = !defenseFilter || pokemon.defense.includes(defenseFilter);
            const hasAttack = !attackFilter || pokemon.attack.includes(attackFilter);
            const hasType1 = !type1Filter || pokemon.type1.includes(type1Filter);
            const hasType2 = !type2Filter || pokemon.type2.includes(type2Filter);

            return hasPokemon && hasDefense && hasAttack && hasType1 && hasType2;
        });
    }
    else {
        filtered = pokemons;
    }
    pokemonTable.update(filtered);
    console.log(filtered);
});