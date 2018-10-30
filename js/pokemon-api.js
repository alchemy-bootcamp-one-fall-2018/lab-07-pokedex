/*eslint-disable no-console */

import pokemons from './data/pokedex.js';
console.log(pokemons);

const pokemonApi = {
    getAll() {
        return pokemons;
    }
};

console.log(pokemonApi);

export default pokemonApi;