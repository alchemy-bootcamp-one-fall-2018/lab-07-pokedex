
const pokeTable = document.getElementById('pokeTable');

const generateTable = {
    
    init(pokemon) {
        var html = '<tr><th>Image</th><th>Pokemon Name</th><th>Type_1</th><th>Type_2</th><th>Weight</th><th>Height</th><th>Attack</th></tr><tr>';

        pokemon.forEach(function(item) {
            html += '<td><img src="assets/pokemon/' + item.id + '.png"></td>';
            html += '<td>' + item.pokemon + '</td>';
            html += '<td>' + item.type_1 + '</td>';
            html += '<td>' + item.type_2 + '</td>';
            html += '<td>' + item.weight + '</td>';
            html += '<td>' + item.height + '</td>';
            html += '<td>' + item.attack + '</td>';
            html += '</tr>';
        });

        pokeTable.innerHTML = html;
    }
};

export default generateTable;