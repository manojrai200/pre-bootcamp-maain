// YOUR CODE BELOW

function veryOdd(array){
    let oddNum = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            oddNum.push(array[i]);
        }
    }
    return oddNum;
}