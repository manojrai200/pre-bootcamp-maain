// YOUR CODE BELOW
function onlyOdds(num){
    sum = 0;
    for(let i = num; i > 0; i--){
        if(i % 2 !== 0){
            sum += i;
        }
    }
    return sum;
}

console.log(onlyOdds(10));
