// YOUR CODE BELOW
function deeperCopy(array){
    let copy = []
    for(let i = 0; i < array.length; i++){
        let element = array[i];

        if(Array.isArray(element)){
            let nestedArray = [];

            for(let j = 0; j < element.length; j++){
                let nestedElement = element[j];
                nestedArray.push(nestedElement);
            }

            copy.push(nestedArray);
        }else {
            copy.push(element);
        }
    }

    return copy;
}

console.log(deeperCopy([1, [2, 3]]));