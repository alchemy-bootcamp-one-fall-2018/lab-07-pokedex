import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

const pokemons = pokemonApi.getAll();
//console.log(pokemons);

pokemonTable.init(pokemons);

pokemonFilter.init(function(pokemonFilter, typeFilter, ability1Filter, shapeFilter) {
    let filtered;

    if(pokemonFilter || typeFilter || ability1Filter || shapeFilter) {
        pokemonFilter = pokemonFilter.toLowerCase();
        typeFilter = typeFilter.toLowerCase();
        ability1Filter = ability1Filter.toLowerCase();
        shapeFilter = shapeFilter.toLowerCase();
        
        filtered = pokemons.filter(function(pokemon) {
            const hasPokemon = !pokemonFilter
                || pokemon.pokemon.toLowerCase().includes(pokemonFilter);
                // make only 1 type and then put both types under it with ||
            const hasType = !typeFilter
                || pokemon.type_1.toLowerCase().includes(typeFilter)
                || pokemon.type_2.toLowerCase().includes(typeFilter);
            const hasAbility1 = !ability1Filter
                || pokemon.ability_1.toLowerCase().includes(ability1Filter);
            const hasShape = !shapeFilter
                || pokemon.shape.toLowerCase().includes(shapeFilter);
            
            return hasPokemon && hasType && hasAbility1 && hasShape;
            // instead of && make it ||
        });
    }
    else {
        filtered = pokemons;
    }
    pokemonTable.update(filtered);
});
    