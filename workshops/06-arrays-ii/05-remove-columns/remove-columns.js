// ### Remove Columns

// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.

// ```javascript
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */
// ```


// // YOUR CODE BELOW

debugger;
let originalGrid = [[1, 2, 3],[1, 2, 3]];


function removeColumns(originalGrid, numColums){
    
    let result = [];
    for(let i = 0; i < originalGrid.length; i++){
        let demoArray = [];
        for(let j = 0; j < originalGrid[i].length - numColums; j++){
            demoArray.push(originalGrid[i][j]);
        }

        result.push(demoArray);
    }

    return result;
}

console.log(removeColumns(originalGrid, 1));