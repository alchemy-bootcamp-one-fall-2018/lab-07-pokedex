import pokeData from './data/pokedex.js';

const pokeApi = {
    
    shortLength: pokeData.length,

    getAll() {
        return pokeData;
    },

    getImages() {
        return pokeImage;
    }
};

export default pokeApi;