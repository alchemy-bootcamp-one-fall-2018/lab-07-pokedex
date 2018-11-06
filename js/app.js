import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();
//console.log(pokemons);

pokemonTable.init(pokemons);

pokemonFilter.init(function(pokemonFilter, type1Filter, type2Filter, ability1Filter, shapeFilter, attackFilter) {
    let filtered;

    if(pokemonFilter || type1Filter || type2Filter || ability1Filter || shapeFilter || attackFilter) {
        pokemonFilter = pokemonFilter.toLowerCase();
        type1Filter = type1Filter.toLowerCase();
        type2Filter = type2Filter.toLowerCase();
        ability1Filter = ability1Filter.toLowerCase();
        shapeFilter = shapeFilter.toLowerCase();
        attackFilter = attackFilter.toLowerCase();
        
        filtered = pokemons.filter(function(pokemon) {
            const hasPokemon = !pokemonFilter
                || pokemon.pokemon.toLowerCase().includes(pokemonFilter);
                // make only 1 type and then put both types under it with ||
            const hasType1 = !type1Filter
                || pokemon.type_1.toLowerCase().includes(type1Filter);
            const hasType2 = !type2Filter
                || pokemon.type_2.toLowerCase().includes(type2Filter);
            const hasAbility1 = !ability1Filter
                || pokemon.ability_1.toLowerCase().includes(ability1Filter);
            const hasShape = !shapeFilter
                || pokemon.shape.toLowerCase().includes(shapeFilter);
            const hasAttack = !attackFilter
                || pokemon.attack >= attackFilter;
            
            return hasPokemon && hasType1 && hasType2 && hasAbility1 && hasShape && hasAttack;
            // instead of && make it ||
        });
    }
    else {
        filtered = pokemons;
    }
    pokemonTable.update(filtered);
});
    