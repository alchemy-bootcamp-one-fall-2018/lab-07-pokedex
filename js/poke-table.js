
const pokeTable = document.getElementById('pokeTable');
const generateTable = {
    
    init(pokemon) {
        var html = '<tr>';
        var length = 50;

        if(pokemon.length < 50) {
            length = pokemon.length;
        }
        for(let i = 0; i < length; i++){
            html += '<td>' + pokemon[i].pokemon + '</td>';
            html += '<td>' + pokemon[i].pokemon + '</td>';
            html += '<td>' + pokemon[i].weight + '</td>';
            html += '<td>' + pokemon[i].height + '</td>';
            html += '<td>' + pokemon[i].type_1 + '</td>';
            html += '<td>' + pokemon[i].type_2 + '</td>';
            html += '<td>' + pokemon[i].attack + '</td>';
            html += '</tr>';
        }
        pokeTable.innerHTML = html;
    }
};

export default generateTable;