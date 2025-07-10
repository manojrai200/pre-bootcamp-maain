// ### Odd Couple

// Define a function, `oddCouple`, that accepts an array of numbers as an argument.

// `oddCouple` should return a new array with the first two odd numbers from the
// original array:

// ```javascript
// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
// ```

// If fewer than two odd numbers exist in the original array, return an empty array
// or an array with the only odd number:

// ```javascript
// oddCouple([10, 15, 20]); // => [15]
// oddCouple(2, 4, 6, 8); // => []
// ```


// YOUR CODE BELOW

function oddCouple(array){
    let count = 0;
    let newArray = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            newArray.push(array[i]);
            count++;

            if(count == 2){
                return newArray;
            }
        }

    }
    
    return newArray;

}

console.log(oddCouple([1, 2, 3, 4, 5]));