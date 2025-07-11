// YOUR CODE BELOW
function callThemAll(obj, arg){
    debugger;
    let calledArray = []
    for(let key in obj){
        if(typeof obj[key] === 'function'){
            calledArray.push(obj[key](arg));
        }
    }
    return calledArray;
}

let numFun = {
    addTwenty: function(num) {
    return num + 20;
    },

    subtractTen: function(num) {
    return num - 10;
    },

    stringify: function(num) {
    return String(num);
    }
};

console.log(callThemAll(numFun, 10));