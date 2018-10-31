import pokemonData from './data/pokedex.js';

const pokemonApi = {
    getAll() {
        return pokemonData;
    }
};

export default pokemonApi;