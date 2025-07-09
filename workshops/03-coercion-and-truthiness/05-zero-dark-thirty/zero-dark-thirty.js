// ### Zero Dark Thirty

// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `zeroDarkThirty` should return a number with all of the zeroes removed:

// ```javascript
// zeroDarkThirty(102302) // => 1232
// zeroDarkThirty(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// zeroDarkThirty(0) // => NaN
// ```



// YOUR CODE BELOW

function zeroDarkThirty(num){
    debugger;
    let newNum = 0;
    let len = num.toString().length;
    for(i = 0; i <= len; i++){
        if (num % 10 === 0){
            continue;
        }else{
            newNum = newNum + ((num % 10) * (10 ** i));
        }
        
    }

    return newNum;
}

zeroDarkThirty(100);