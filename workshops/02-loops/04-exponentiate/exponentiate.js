// YOUR CODE BELOW
function exponentiate(base, power){
    debugger;
    let result = 1;
    if (power === 0){
        return result;
    }else {
        for(i = 1; i <= power; i++){
            result *= base;
        }
    }
    return result; 
}

console.log(exponentiate(3, 8)); 