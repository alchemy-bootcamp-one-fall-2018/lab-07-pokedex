const filterName = document.getElementById('filter-name');
const filterType1 = document.getElementById('filter-type1');
const filterType2 = document.getElementById('filter-type2');
const filterAttack = document.getElementById('filter-attack');
const filterDefense = document.getElementById('filter-defense');
const filterSpeed = document.getElementById('filter-speed');

const pokemonFilter = {

    init(onFilter) {  
        
        function handleFilter() {
            onFilter(
                filterName.value,
                filterType1.value,
                filterType2.value,
                filterAttack.value,
                filterDefense.value,
                filterSpeed.value
            );
        }   
        filterName.addEventListener('keyup', handleFilter);
        filterType1.addEventListener('keyup', handleFilter);
        filterType2.addEventListener('keyup', handleFilter);
        filterAttack.addEventListener('keyup', handleFilter);
        filterDefense.addEventListener('keyup', handleFilter);
        filterSpeed.addEventListener('keyup', handleFilter);
    }
};


export default pokemonFilter;
        
        
        
        // filterName.addEventListener('keyup', function() {
        //     onFilter(
        //         filterName.value,
        //         filterType1.value,
        //         filterType2.value,
        //         filterAttack.value,
        //         filterDefense.value,
        //         filterSpeed.value
        //     );
        // });

        // filterType1.addEventListener('keyup', function() {
        //     onFilter(
        //         filterName.value,
        //         filterType1.value,
        //         filterType2.value,
        //         filterAttack.value,
        //         filterDefense.value,
        //         filterSpeed.value
        //     );
        // });


//         pokemonFilter.addEventListener('keyup', function() {
//             onFilter(
                // filterName.value,
                // filterType1.value,
                // filterType2.value,
                // filterAttack.value,
                // filterDefense.value,
                // filterSpeed.value
//             );
//         });
//     }
// };
