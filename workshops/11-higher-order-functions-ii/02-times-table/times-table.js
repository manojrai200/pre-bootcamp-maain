// YOUR CODE BELOW
function timesTable(a){
    function product(b){
        return a * b;
    }
    return product;
}

let ninesTable = timesTable(9);
console.log(ninesTable(8));  