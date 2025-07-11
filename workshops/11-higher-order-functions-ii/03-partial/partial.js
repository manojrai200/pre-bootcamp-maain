// YOUR CODE BELOW


function add(a, b) {
    return a + b;
}

function partial(callBack, a){

    return function(b){

        return callBack(a, b);
    }
}


let sumFive = partial(add, 5);
console.log(sumFive(10));