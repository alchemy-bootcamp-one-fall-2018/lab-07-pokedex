import pokedexApi from './pokemon-api.js'
import pokemonTable from './pokemon-table.js'
import pokedexFilter from './pokemon-filter.js'


const pokemon = pokedexApi.getAll();

pokemonTable.init(pokemon);

pokedexFilter.init(function(nameFilter, typeFilter, attackFilter, defenseFilter, hpFilter) {

    let filtered;

    if(nameFilter || typeFilter || attackFilter || defenseFilter || hpFilter) {

        nameFilter = nameFilter.toLowerCase();
        typeFilter = typeFilter.toLowerCase();

        filtered = pokemon.filter(function(singlePokemon) {
            const hasName = !nameFilter
            || singlePokemon.pokemon.toLowerCase().includes(nameFilter);

            const hasType = !typeFilter
            || singlePokemon.type_1.toLowerCase().includes(typeFilter)
            || singlePokemon.type_2.toLowerCase().includes(typeFilter);

            const hasAttack = !attackFilter
            || singlePokemon.attack >= attackFilter;

            const hasDefense = !defenseFilter
            || singlePokemon.defense >= defenseFilter;

            const hasHp = !hpFilter
            || singlePokemon.hp >= hpFilter;

            return hasName && hasType && hasAttack && hasDefense && hasHp;

        });
    }
    else {
        filtered = pokemon;
    }

    pokemonTable.update(filtered);
});