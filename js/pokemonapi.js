import pokedex from './data/pokedex.js';

const pokemonApi = {
    getAll() {
        return pokedex;
    }
};

export default pokemonApi;
//API = gatekeeper of the data 