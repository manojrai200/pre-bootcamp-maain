// YOUR CODE BELOW
function callCount(){
    let count = 0;
    function increment(){
        count++;
        return count;
    }

    return increment;
}
let returnedFunction = callCount();

returnedFunction();
returnedFunction();