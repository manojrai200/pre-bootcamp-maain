// YOUR CODE BELOW
function reverseArray(array){
    debugger;
    let demoArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        demoArray.push(array.shift());
    }

    for(let i = 0; i < demoArray.length; i++){
        array.unshift(demoArray[i]);
    }

    return array;
}

console.log(reverseArray(['here', 'we', 'go']));