const tableBody = document.getElementById('pokemon-body'); 

function makeRow(pokemon) {
    return html`<tr> 
        <td>${pokemon.species_id}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.defense}</td>
        <td>${pokemonbase}</td> 
        <td>${pokemon.tags.join(', ')}</td>
    </tr>`;
}

const pokemonTable = {
    init(pokemons) {
        pokemon.forEach(function(contact) {
            const tr = makeRow(contact); 
            tableBody.appendChild(tr); 
        });
        
    }
}, 



export default pokemonTable; 
