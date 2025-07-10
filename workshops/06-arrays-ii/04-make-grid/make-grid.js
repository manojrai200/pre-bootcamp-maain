// ### Make Grid

// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// ```javascript
// makeGrid(3,4);
// /* => [[1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3]]
// */
// ```


// // YOUR CODE BELOW

function makeGrid(numColumns, numRows){

    debugger;
    let result = [];

    for(let j = 0; j < numRows; j++){
        let tempArray=[];
        for(let i = 0 ; i < numColumns; i++){
            tempArray.push(i + 1);
        }
        result.push(tempArray);
    }

    return result;

}

console.log(makeGrid(3,2));