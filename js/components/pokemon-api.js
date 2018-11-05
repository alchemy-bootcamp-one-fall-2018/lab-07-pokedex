import pokedex from '../data/pokedex.js';

const pokemonApi = {
    getAll() {
        return pokedex;
    }
};

export default pokemonApi;