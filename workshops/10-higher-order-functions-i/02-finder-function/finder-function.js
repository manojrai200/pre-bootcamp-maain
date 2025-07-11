// YOUR CODE BELOW
    // function isApple(string) {
    //   return string === 'apple';
    // }

    // let fruits = ['not an apple', 'not an apple', 'apple', 'not an apple'];



function finderFunction(array, func){
    debugger;
    for(let i = 0; i < array.length; i++){
        if(func(array[i])){
            return i;
        }
    }

    return -1;
}

// finderFunction(fruits, isApple);