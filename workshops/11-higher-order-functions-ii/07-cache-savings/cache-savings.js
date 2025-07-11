// YOUR CODE BELOW
function cacheSavings(callBackFunc){
    let cache = {};
    
    return function (arg){
        if(cache[arg] === undefined){
            let callBackResult = callBackFunc(arg);
            cache[arg] = callBackResult;
            
        }

        return cache[arg];
    }
}