// YOUR CODE BELOW
function myForEach(array, callBackFunc){

    if(callBackFunc == undefined){
        return undefined;
    }

    for(let i = 0; i < array.length; i++){
        callBackFunc(array[i], i);
    }
}