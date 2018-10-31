//contact = pokemon
//contacts = pokemons, and pokedex

import pokedexApi from './pokedex-api.js';
import pokedexTable from './pokedex-table.js';
import pokedexFilter from './pokedex-filter.js';

const pokemons = pokedexApi.getAll();

pokedexTable.init(pokemons);

pokedexFilter.init(function(nameFilter, typeFilter, hpMinFilter, hpMaxFilter, atkMinFilter, atkMaxFilter, defMinFilter, defMaxFilter, spatkMinFilter, spatkMaxFilter, spdefMinFilter, spdefMaxFilter, speedMinFilter, speedMaxFilter) {
    let filtered;
    if(nameFilter || typeFilter || hpMinFilter || hpMaxFilter || atkMinFilter || atkMaxFilter || defMinFilter || defMaxFilter || spatkMinFilter || spatkMaxFilter || spdefMinFilter || spdefMaxFilter || speedMinFilter || speedMaxFilter) {
        nameFilter = nameFilter.toLowerCase();

        filtered = pokemons.filter(function(pokemon) {
            const hasName = !nameFilter
                || pokemon.pokemon.toLowerCase().includes(nameFilter);
            
            const hasType = !typeFilter
                || pokemon.type_1.toLowerCase().includes(typeFilter)
                || pokemon.type_2.toLowerCase().includes(typeFilter);
            
            const hasMinHP = !hpMinFilter
                || pokemon.hp > hpMinFilter;

            const hasMaxHP = !hpMaxFilter
                || pokemon.hp < hpMaxFilter;

            const hasMinATK = !atkMinFilter
                || pokemon.attack > atkMinFilter;

            const hasMaxATK = !atkMaxFilter
                || pokemon.attack < atkMaxFilter;
            
            const hasMinDEF = !defMinFilter
                || pokemon.defense > defMinFilter;

            const hasMaxDEF = !defMaxFilter
                || pokemon.defense < defMaxFilter;

            const hasMinSpATK = !spatkMinFilter
                || pokemon.special_attack > spatkMinFilter;
            
            const hasMaxSpATK = !spatkMaxFilter
                || pokemon.special_attack < spatkMaxFilter;

            const hasMinSpDEF = !spdefMinFilter
                || pokemon.special_defense > spdefMinFilter;
            
            const hasMaxSpDEF = !spdefMaxFilter
                || pokemon.special_defense < spdefMaxFilter;

            const hasMinSpeed = !speedMinFilter
                || pokemon.speed > speedMinFilter;

            const hasMaxSpeed = !speedMaxFilter
                || pokemon.speed < speedMaxFilter;

            return hasName && hasType && hasMinHP && hasMaxHP && hasMinATK && hasMaxATK && hasMinDEF && hasMaxDEF && hasMinSpATK && hasMaxSpATK && hasMinSpDEF && hasMaxSpDEF && hasMinSpeed && hasMaxSpeed;
        });
    }
    else {
        filtered = pokemons;
        // perhaps change the above "pokemons" to pokedex if doesn't work
    }
    pokedexTable.update(filtered);
});