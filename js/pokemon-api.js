/*eslint-disable no-console */

import pokemon from './data/pokedex.js';
console.log(pokemon);

const pokemonApi = {
    getAll() {
        return pokemon;
    }
};

console.log(pokemonApi);

export default pokemonApi;