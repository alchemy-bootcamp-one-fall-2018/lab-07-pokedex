
const pokeTable = document.getElementById('pokeTable');
const generateTable = {
    
    init(pokemon) {
        var html = '<tr>';

        for(let i = 0; i < 10; i++){
            html += '<td>' + pokemon[i].pokemon + '</td>';
            html += '<td>' + pokemon[i].weight + '</td>';
            html += '<td>' + pokemon[i].height + '</td>';
            html += '<td>' + pokemon[i].type_1 + '</td>';
            html += '<td>' + pokemon[i].type_2 + '</td>';
            html += '</tr>';
        }
        pokeTable.innerHTML = html;
    }
};

export default generateTable;