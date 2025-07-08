// YOUR CODE BELOW
function taxCalculator(price, state){
    if (state === 'NY'){
        return price + .04 * price;
    }else if (state === 'NJ'){
        return price + .06625 * price;
    }

}

console.log(taxCalculator(10, 'NJ'))