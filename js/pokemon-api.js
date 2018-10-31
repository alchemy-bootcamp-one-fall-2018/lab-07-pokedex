import pokeData from './data/pokedex.js';

const pokeApi = {
    getAll() {
        return pokeData;
    },

    getImages() {
        return pokeImage;
    }
};

export default pokeApi;