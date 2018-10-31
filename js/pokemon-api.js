import pokeData from './data/pokedex.js';

const pokeApi = {
    
    shortLength: 50,

    getAll() {
        return pokeData;
    },

    getImages() {
        return pokeImage;
    }
};

export default pokeApi;