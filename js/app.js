/*eslint-disable no-console */

import pokemonApi from './pokemon-api.js';
import pokemonTable from './pokemon-table.js';
import pokemonFilter from './pokemon-filter.js';

//gets initial pokemon data
const pokemons = pokemonApi.getAll();

//sends data down
pokemonTable.init(pokemons);

pokemonFilter.init(function(nameFilter, typeFilter, attackFilter, weightFilter, heightFilter) {

    let filtered;

    if(nameFilter || typeFilter || attackFilter || weightFilter || heightFilter) {
        nameFilter = nameFilter.toLowerCase();
        typeFilter = typeFilter.toLowerCase();

        filtered = pokemons.filter(function(pokemon) {
            const hasName = !nameFilter || pokemon.pokemon.toLowerCase().includes(nameFilter);
            const hasType = !typeFilter || pokemon.type_1.toLowerCase().includes(typeFilter) || pokemon.type_2.toLowerCase().includes(typeFilter);
            const hasAttack = !attackFilter || pokemon.attack >= attackFilter;
            const hasWeight = !weightFilter || pokemon.weight >= weightFilter;
            const hasHeight = !heightFilter || pokemon.height >= heightFilter;

            return hasName && hasType && hasAttack && hasWeight && hasHeight;
        });
    }
    else {
        filtered = pokemons;
    }

    pokemonTable.update(filtered);

});

