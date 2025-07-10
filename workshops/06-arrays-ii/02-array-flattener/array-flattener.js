// ### Array Flattener

// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```


// // YOUR CODE BELOW

function arrayFlattener(array){
    let flattenArray = [];
    for(let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
            for(let j = 0; j < array[i].length; j++){
                flattenArray.push(array[i][j]);
            }
            
        }else{
            flattenArray.push(array[i]);
        }
    }
    return flattenArray;
}