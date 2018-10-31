import pokeData from './data/pokedex.js';

var pokeImages = [];

// for(let i = 0; i < pokeData.length; i++) {
//     let tag = '<img src="assets/pokemon/' + pokeData[i].id + '".png>';
//     console.log(tag);
// }


const pokeApi = {
    
    shortLength: pokeData.length,

    getAll() {
        return pokeData;
    },

    getImages() {
        return pokeImages;
    }
};

export default pokeApi;