// ### Even and Odd

// Define a function, `evenAndOdd`, that accepts an array.

// `evenAndOdd` should return a new array. The first element in the new array
// should be an array with all of the even numbers from the original array. The
// second element in the new array should be an array with all of the odd numbers
// from the original array.

// ```javascript
// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
// ```


// // YOUR CODE BELOW

function evenAndOdd(array){
    let newArray = [[],[]];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            newArray[0].push(array[i]);
        }else {
            newArray[1].push(array[i]);
        }
    }

    return newArray;
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));