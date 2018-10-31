
const countHeader = document.getElementById('pokemon-count');

const pokemonCount = {
    init(count, filter) {
        let message;
        if(count === 0) {
            message = `Sorry, there are no ${filter}`;
        }
        else {
            message = `Showing ${count} "${filter}" Pokemon`;
        }
        countHeader.textContent = message;
    },
    update(count, filter) {
        pokemonCount.init(count, filter);
    }
};

export default pokemonCount;