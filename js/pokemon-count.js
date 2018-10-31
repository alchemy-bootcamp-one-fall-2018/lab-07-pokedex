
const countHeader = document.getElementById('pokemon-count');

const pokemonCount = {
    init(count) {
        countHeader.textContent = `Showing ${count} Pokemon`;
    },
    update(count) {
        pokemonCount.init(count);
    }
};

export default pokemonCount;