// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum){
    debugger;
    let counter = 0;
    if (targetNum > currentNum){
        for (let i = currentNum; i < targetNum; i *= 2){
            counter++;
        }
    }else{
        return ("targetNum must be larger than currentNum");
    }
    return counter * 20;
}

console.log(bacteriaTime(1, 8));